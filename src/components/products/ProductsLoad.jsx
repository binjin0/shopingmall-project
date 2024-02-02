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
