import { useEffect, useState } from "react";
import "../components/Products.css"
import type { Product } from "../types/auth.types";

const Products = () => {

  const [products, setProducts] = useState<Product[]> ([]);
  //const [stockById, setStockById] = useState({});

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
const updateStock = async (id: string, updatedStock: number) => {

  const newStock = {
    stock: updatedStock
  }
  console.log("id: " + id + " " + "updatedStock: " + updatedStock + "newStock: " + newStock)

  const token = localStorage.getItem('token');
  try {
      const res = await fetch(`http://localhost:5001/items/${id}`, {
          method: "PUT",
          headers: {
              "Content-type": "application/json",
              "Authorization": `Bearer ` + token
          },
          body: JSON.stringify(newStock)
      });
      if(res.ok){
          const data = await res.json();
          console.log("Uppdaterad" + data);
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
              <p>Lagersaldo: {product.stock}</p> 
               {/* <input type="number" value={stockById[product._id] || 0} onChange={(e) => setStockById({[product._id] : Number(e.target.value)})} /> <button onClick={() => updateStock(product._id, product.stock)}>Uppdatera saldo</button> */}
              <p>{product.price}kr</p>
            </div>
          </article>
        ))}
    </div>
  )
}

export default Products