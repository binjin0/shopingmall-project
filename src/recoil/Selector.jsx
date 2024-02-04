import { selector } from "recoil";
import { productListState } from "./Recoil";

export const clothingState = selector({
  key: "clothingState",
  get: ({ get }) => {
    const data = get(productListState);
    const dataArray = Array.isArray(data) ? data : [];
    const result = dataArray.filter((product) =>
      product.category.toLowerCase().includes("clothing")
    );
    return result;
  },
});

export const digitalState = selector({
  key: "digitalState",
  get: ({ get }) => {
    const data = get(productListState);
    const dataArray = Array.isArray(data) ? data : [];
    const result = dataArray.filter(
      (product) => product.category === "electronics"
    );
    return result;
  },
});

export const accessoriesState = selector({
  key: "accessoriesState",
  get: ({ get }) => {
    const data = get(productListState);
    const dataArray = Array.isArray(data) ? data : [];
    const result = dataArray.filter(
      (product) => product.category === "jewelery"
    );
    return result;
  },
});
// export const productsState = selector({
//   key: "productsState",
//   get: ({ get }) => {
//     const data = get(productListState);
//     const result = data;
//     return result;
//   },
// });
