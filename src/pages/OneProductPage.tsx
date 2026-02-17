import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../components/Products.css"
import { BounceLoader } from "react-spinners";

const OneProduct = () => {

    const [name, setName] = useState<string | null>('');
    const [description, setDescription] = useState<string | null>('');
    const [articleNumber, setArticleNumber] = useState<number | null>(null);
    const [stock, setStock] = useState<number | null>(null);
    const [price, setPrice] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const {id} = useParams();
    

  //Hämta produkt
  const getProduct = async () => {

    try {
        setLoading(true)
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
    }finally{
        setLoading(false)
    }
}

useEffect(() => {
  getProduct();
}, []);

  return (
    <div>
        <h1>Produkt</h1>
        {loading && 
            <div className="loading" style={{display: "flex", justifyContent: "center", margin: "1em"}}>
                <BounceLoader />
            </div>}
        {loading == false && 
            <article>
                <div className="oneProduct">
                <h2>{name}</h2>
                <p>{description}</p>
                {articleNumber !== null && <p>Artikelnummmer: {articleNumber}</p>}
                {stock !== null && <p>Lagersaldo: {stock}</p>}
                {price !== null && <p>{price}kr</p>}
                </div>
            </article>
        }
    </div>
  )
}

export default OneProduct