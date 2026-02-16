import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"
import type { Product } from "../types/auth.types";

const StartPage = () => {

  const {admin} = useAuth();
  const [products, setProducts] = useState<Product[]> ([]);

  //Hämta produkter
  const getProducts = async () => {

    try {
        const res = await fetch("http://localhost:5001/items", {
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
    }
}
useEffect(() => {
  getProducts();
}, []);

  return (
    <div>
        <h1>Startsida</h1>
        <b style={{display: "flex", justifyContent: "center", marginBottom: "1em", color: "pink", fontSize: "1.3em"}}>Välkommen {admin?.firstname}</b>
        {products.map((product) => (
          <article key={product._id} className="allProducts">
            <div className="oneProduct">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Artikelnummmer: {product.articleNumber}</p>
              <p>Lagersaldo: {product.stock}</p> 
               {/* <input type="number" value={stockById[product._id] || 0} onChange={(e) => setStockById({[product._id] : Number(e.target.value)})} /> <button onClick={() => updateStock(product._id, product.stock)}>Uppdatera saldo</button> */}
              <p>{product.price}kr</p>
            </div>
          </article>
        ))}
    </div>
  )
}

export default StartPage