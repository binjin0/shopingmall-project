import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { productListState } from "../../recoil/Recoil";
export default function ProductsLoad() {
  const [productList, setProductList] = useRecoilState(productListState);
  // const [clothingProducts, setClothingProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const result = await res.json();
        setProductList(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [setProductList]);
  return;
}
// <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
//   <div key={productList.id}>
//     <div className="text-sm breadcrumbs">
//       <ul>
//         <li>액세서리</li>
//         <li>{productList.title}</li>
//       </ul>
//     </div>
//   </div>
// </section>
