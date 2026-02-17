import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"
import type { Product } from "../types/auth.types";
import { useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";

const StartPage = () => {

  const {admin} = useAuth();
  const [products, setProducts] = useState<Product[]> ([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  //Hämta produkter
  const getProducts = async () => {

    try {
      setLoading(true);
        const res = await fetch("https://labb3-back-ff.onrender.com/items", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
        if(res.ok){
            const data = await res.json();
            setProducts(data);
        }
    } catch (error) {
        throw error;
    } finally {
      setLoading(false);
    }
}
useEffect(() => {
  getProducts();
}, []);

  return (
    <div>
        <h1>Startsida</h1>
        <b style={{display: "flex", justifyContent: "center", marginBottom: "1em", color: "purple", fontSize: "1.3em"}}>Välkommen {admin?.firstname}</b>
        {loading && 
            <div className="loading" style={{display: "flex", justifyContent: "center", margin: "1em"}}>
                <BounceLoader />
            </div>}
        {loading == false && 
        products.map((product) => (
          <article key={product._id} className="allProducts">
            <div className="oneProduct">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Artikelnummmer: {product.articleNumber}</p>
              <p>Lagersaldo: {product.stock}</p> 
              <p>{product.price}kr</p>
              <button style={{backgroundColor: "blue", border: "1px solid blue", color: "white", marginBottom: "1em", marginTop: "0.5em", marginRight: "0.5em"}} onClick={() => navigate(`/oneproduct/${product._id}`)}>Se enskild produkt</button>
            </div>
          </article>
        ))
      }
    </div>
  )
}

export default StartPage