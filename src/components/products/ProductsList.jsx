import React from "react";
import { useRecoilValue } from "recoil";
import {
  digitalState,
  clothingState,
  accessoriesState,
} from "../../recoil/Selector";
import ProductCard from "./ProductCard";

export const DigitalLoad = () => {
  const digitalList = useRecoilValue(digitalState);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
      {digitalList.map((product) => (
        <ProductCard key={product.id} product={product} category="Digital" />
      ))}
    </div>
  );
};

export const ClothingLoad = () => {
  const ClothingList = useRecoilValue(clothingState);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
      {ClothingList.map((product) => (
        <ProductCard key={product.id} product={product} category="Fashion" />
      ))}
    </div>
  );
};
export const ClothingLimitLoad = () => {
  const ClothingList = useRecoilValue(clothingState);
  const limitedClothingList = ClothingList.slice(0, 4);

  return (
    <div
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
      data-scroll="true"
    >
      {limitedClothingList.map((product) => (
        <ProductCard key={product.id} product={product} category="Fashion" />
      ))}
    </div>
  );
};

export const AccessoriesLoad = () => {
  const AccesoriesList = useRecoilValue(accessoriesState);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
      {AccesoriesList.map((product) => (
        <ProductCard key={product.id} product={product} category="Digital" />
      ))}
    </div>
  );
};
