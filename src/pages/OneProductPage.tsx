import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { NewProduct } from "../types/auth.types";

const OneProduct = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [articleNumber, setArticleNumber] = useState(0);
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const [error, setError] = useState('');

    const {id} = useParams();
    

      //Hämta produkter
  const getProduct = async () => {
    const token = localStorage.getItem("token");

    if(!token){
        return;
    }

    try {
        const res = await fetch(`https://labb3-back-ff.onrender.com/items/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
        if(res.ok){
            const data = await res.json();
                setName(data.name);
                setDescription(data.description);
                setArticleNumber(data.articleNumber);
                setStock(data.stock);
                setPrice(data.price);
        }
    } catch (error) {
        throw error;
    }
}

useEffect(() => {
  getProduct();
}, []);

  return (
    <div>
        <h1>Produkt</h1>
        <article>
            <div className="oneProduct">
              <h2>{name}</h2>
              <p>{description}</p>
              <p>Artikelnummmer: {articleNumber}</p>
              <p>Lagersaldo: {stock}</p> 
              <p>{price}kr</p>
            </div>
          </article>
    </div>
  )
}

export default OneProduct