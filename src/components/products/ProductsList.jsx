import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { useDataScroll } from "data-scroll";
import {
  digitalState,
  clothingState,
  accessoriesState,
} from "../../recoil/Selector";
import ProductCard from "./ProductCard";
// import DetailCard from "./DetailCard";

// export const ProductLoad = ({ selectedProductId, setSelectedProductId }) => {
//   // const [selectedProductId, setSelectedProductId] = useState(null);
//   const productsList = useRecoilValue(productsState);

//   let renderedContent;
//   if (selectedProductId) {
//     // 선택된 제품에 대한 DetailCard를 렌더링
//     const selectedProduct = productsList.find(
//       (product) => product.id === selectedProductId
//     );

//     renderedContent = selectedProduct ? (
//       <DetailCard product={selectedProduct} />
//     ) : (
//       <div>선택된 제품을 찾을 수 없습니다.</div>
//     );
//   } else {
//     // ProductCard 목록을 렌더링
//     renderedContent = <div>오류</div>;
//   }
//   return (
//     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
//       {/* <DetailCard key={productsList.id} product={productsList} /> */}
//       {/* {productsList.map((product) => (
//         <DetailCard key={product.id} product={product} category="Digital" />
//       ))} */}
//       {/* {selectedProductId ? (
//         // 선택된 제품에 대한 DetailCard를 렌더링
//         <DetailCard
//           product={productsList.find(
//             (product) => product.id === selectedProductId
//           )}
//         />
//       ) : (
//         // ProductCard 목록을 렌더링
//         <div>오류</div>
//       )} */}
//       {renderedContent}
//     </div>
//   );
// };

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
  useDataScroll();
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
        <ProductCard key={product.id} product={product} category="jewelery" />
      ))}
    </div>
  );
};
export const AccessoriesLimitLoad = () => {
  const AccesoriesList = useRecoilValue(accessoriesState);
  const limitedAccesoriesList = AccesoriesList.slice(0, 4);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
      {limitedAccesoriesList.map((product) => (
        <ProductCard key={product.id} product={product} category="jewelery" />
      ))}
    </div>
  );
};
