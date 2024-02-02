import { selector } from "recoil";
import { productListState } from "./Recoil";

export const clothingState = selector({
  key: "clothingState",
  get: ({ get }) => {
    const data = get(productListState);
    const result = data.filter((product) =>
      product.category.toLowerCase().includes("clothing")
    );
    return result;
  },
});

export const digitalState = selector({
  key: "digitalState",
  get: ({ get }) => {
    const data = get(productListState);
    const result = data.filter((product) => product.category === "electronics");
    return result;
  },
});

export const accessoriesState = selector({
  key: "accessoriesState",
  get: ({ get }) => {
    const data = get(productListState);
    const result = data.filter((product) => product.category === "jewelery");
    return result;
  },
});
