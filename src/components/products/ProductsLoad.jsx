import React, { useEffect, useState } from "react";

export default function ProductsLoad() {
  const [clothingProducts, setClothingProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const result = await res.json();
      const clothingProducts = result.filter((product) =>
        product.category.toLowerCase().includes("clothing")
      );

      setClothingProducts(clothingProducts);
      console.log(result);
    }
    fetchData();
  }, []);
  return (
    <div>
      {clothingProducts.map((product) => (
        <div
          key={product.id}
          className="card card-compact w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img src={product.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
