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
    
    
    const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        try {
            await addProduct({name, description, articleNumber, stock, price});
            navigate("/products");
            
        } catch (error) {
            setError("Inlogging misslyckad, kontrollera inloggningsuppgifter och försök igen.")
        }
    }

    const addProduct = async (credentials: NewProduct) => {

        console.log(credentials)
      
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
                const data = await res.json();
                console.log("Tillagd produkt: " + data);
                //navigate("/products");
            }
        } catch (error) {
            throw error;
        }
      }
  return (
    <div>
        <h1>Lägg till produkt</h1>

    </div>
  )
}

export default AddPage