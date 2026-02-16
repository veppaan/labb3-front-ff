import { useEffect, useState } from "react";
import "../components/Products.css"
import type { Product } from "../types/auth.types";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]> ([]);
  //const [stockById, setStockById] = useState({});

  //Hämta produkter
  const getProducts = async () => {
    const token = localStorage.getItem("token");

    if(!token){
        return;
    }

    try {
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
    }
}

//Raderar produkt
const deleteProduct = async (id: string, name: string) => {

//Dubbelkollar om radering skulle ske
const ask = confirm("Vill du verkligen radera " + name + "?")
if(!ask){
  return
} else{
  const token = localStorage.getItem('token');
  try {
      
  const resp = await fetch(`https://labb3-back-ff.onrender.com/items/${id}`, {
      method: "DELETE",
      headers: {
          "content-type": "application/json",
          "Authorization": `Bearer ` + token
      }
  })
  if(resp.ok) {
      getProducts();
  }
  } catch (error) {
      console.log("Error deleting item: " + error)
  }
}
}

useEffect(() => {
  getProducts();
}, []);

  return (
    <div>
        <h1>Produkter</h1>
        <button onClick={() => navigate("/add")}>Lägg till produkt</button> <br />
        <br />
        {products.map((product) => (
          <article key={product._id} className="allProducts">
            <div className="oneProduct">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Artikelnummmer: {product.articleNumber}</p>
              <p>Lagersaldo: {product.stock}</p> 
              <p>{product.price}kr</p>
              <button style={{backgroundColor: "blue", border: "1px solid blue", color: "white", marginBottom: "1em", marginTop: "0.5em", marginRight: "0.5em"}} onClick={() => navigate(`/edit/${product._id}`)}>Redigera produkt</button>
              <button style={{backgroundColor: "red", border: "1px solid red", color: "white", marginBottom: "1em", marginTop: "0.5em"}} onClick={() => deleteProduct(product._id, product.name)}>Radera produkt</button>
            </div>
          </article>
        ))}
    </div>
  )
}

export default Products