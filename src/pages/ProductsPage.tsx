import { useEffect, useState } from "react";
import "../components/Products.css"
import type { Product } from "../types/auth.types";

const Products = () => {

  const [products, setProducts] = useState<Product[]> ([]);
  const [stock, setStock] = useState(0);

  const getProducts = async () => {
    const token = localStorage.getItem("token");

    if(!token){
        return;
    }

    try {
        const res = await fetch("http://localhost:5001/items", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
        if(res.ok){
            const data = await res.json();
            console.log(data);
            setProducts(data);
        }
    } catch (error) {
        throw error;
    }
}
const updateStock = async () => {

  try {
      const res = await fetch("http://localhost:5001/items", {
          method: "PUT",
          headers: {
              "Content-type": "application/json"
          }
      });
      if(res.ok){
          const data = await res.json();
          console.log(data);
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
        <h1>Produkter</h1>
        <button>Lägg till produkt</button> <br />
        <br />
        {products.map((product) => (
          <article key={product._id} className="allProducts">
            <div className="oneProduct">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Artikelnummmer: {product.articleNumber}</p>
              <p>Lagersaldo: </p> <input type="number" value={product.stock} onChange={(e) => setStock(Number(e.target.value))} /> <button onChange={updateStock}>Uppdatera saldo</button>
              <p>{product.price}kr</p>
            </div>
          </article>
        ))}
    </div>
  )
}

export default Products