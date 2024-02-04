import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const productListState = atom({
  key: "productListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const cartState = atom({
  key: "cartState", // 유일한 식별자
  default: [], // 초기 상태 (장바구니가 비어있음)
  effects_UNSTABLE: [persistAtom],
});
