import { useEffect, useState } from "react";
import "../components/Products.css"
import type { Product } from "../types/auth.types";

const Products = () => {

  const [products, setProducts] = useState<Product[]> ([]);

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

useEffect(() => {
  getProducts();
}, []);

  return (
    <div>
        <h1>Produkter</h1>
        {products.map((product) => (
          <article className="allProducts" key={product.id}>
            <div className="oneProduct">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Artikelnummmer: {product.articleNumber}</p>
              <p>Lagersaldo: <strong>{product.stock}</strong></p>
              <p>{product.price}kr</p>
            </div>
          </article>
        ))}
    </div>
  )
}

export default Products