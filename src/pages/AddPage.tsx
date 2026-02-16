import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { NewProduct } from "../types/auth.types";

const AddPage = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [articleNumber, setArticleNumber] = useState(0);
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const [error, setError] = useState('');

    const [nameError, setNameError] = useState('');
    const [desError, setDesError] = useState('');
    const [articleError, setArticleError] = useState('');
    const [stockError, setStockError] = useState('');
    const [priceError, setPriceError] = useState('');
    
    
    const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        try {
            const result = await addProduct({name, description, articleNumber, stock, price});
            if(result === true){
                navigate("/products");
            }
            
        } catch (error) {
            setError("Inlogging misslyckad, kontrollera inloggningsuppgifter och försök igen.")
        }
    }

    const addProduct = async (credentials: NewProduct) => {
      
        const token = localStorage.getItem('token');

        try {
            const res = await fetch(`http://localhost:5001/items`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ` + token
                },
                body: JSON.stringify(credentials)
            });
            if(res.ok){
                console.log("Produkt tillagd!");
                return true;
            }
            if(!res.ok){
                const data = await res.json();
                setNameError(data.errors.name);
                setDesError(data.errors.description);
                setArticleError(data.errors.articleNumber);
                setStockError(data.errors.stock);
                setPriceError(data.errors.price);
            }
        } catch (error) {
            throw new Error;
        }
      }
  return (
    <div>
        <h1>Lägg till produkt</h1>
        <form onSubmit={handleClick}>
            {error && (
                <p className="errorMsg">{error}</p>
            )}
            <label htmlFor="title">Namn</label>
            <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Skriv namnet på varan" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            {nameError && (
                <p className="errorMsg">{nameError}</p>
            )}
            <label htmlFor="description">Beskrivning</label>
            <textarea 
            rows={5} 
            id="description" 
            name="description" 
            placeholder="Skriv beskrivning" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            {desError && (
                <p className="errorMsg">{desError}</p>
            )}
            <label htmlFor="article-number">Artikelnummer</label>
            <input 
            type="number" 
            id="article-number" 
            name="article-number" 
            value={articleNumber}
            onChange={(e) => setArticleNumber(Number(e.target.value))}
            />
            {articleError && (
                <p className="errorMsg">{articleError}</p>
            )}
            <label htmlFor="stock">Lagersaldo</label>
            <input 
            type="number" 
            id="stock" 
            name="stock" 
            value={stock}
            onChange={(e) => setStock(Number(e.target.value))}
            />
            {stockError && (
                <p className="errorMsg">{stockError}</p>
            )}
            <label htmlFor="price">Pris</label>
            <input 
            type="number" 
            id="price" 
            name="price"  
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            />
            {priceError && (
                <p className="errorMsg">{priceError}</p>
            )}
            <button type="submit" className="loginBtn" style={{color: "white", backgroundColor: "blue", padding: "8px 20px", borderRadius: "8px", border: "none", fontSize: "1em", cursor: "pointer"}}>Lägg till produkt</button>
        </form>
    </div>
  )
}

export default AddPage