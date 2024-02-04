import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, category, onClick }) => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = () => {
    setHovered(product.id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="card card-bordered p-0 border-gray-200 dark:border-gray-800 card-compact lg:card-normal overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        onClick(product.id);
      }}
    >
      <figure className="flex h-80 bg-white overflow-hidden items-center justify-center transition-transform duration-300 transform">
        <img
          src={product.image}
          alt="상품이미지"
          className={`object-scale-down max-h-40 transition-transform duration-300 transform ${
            hovered === product.id ? "scale-125" : ""
          }`}
        />
      </figure>
      <div className="card-body bg-gray-100 dark:bg-gray-700">
        <p className="card-title text-base text-left">{product.title}</p>
        <p className="text-base text-left">${product.price}</p>
        {/* <p className="text-base text-left">{category}</p> */}
      </div>
    </Link>
  );
};

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import { digitalState } from "../../recoil/Selector";

// const ProductCard = () => {
//   const [hovered, setHovered] = useState(null);
//   const digitalList = useRecoilValue(digitalState);

//   const handleMouseEnter = (productId) => {
//     setHovered(productId);
//   };

//   const handleMouseLeave = () => {
//     setHovered(null);
//   };

//   return digitalList.map((product, category) => (
//     <Link
//       key={product.id}
//       to="/"
//       className="card card-bordered p-0 border-gray-200 dark:border-gray-800 card-compact lg:card-normal overflow-hidden relative"
//       onMouseEnter={() => handleMouseEnter(product.id)}
//       onMouseLeave={handleMouseLeave}
//     >
//       <figure className="flex h-80 bg-white overflow-hidden items-center justify-center transition-transform duration-300 transform">
//         <img
//           src={product.image}
//           alt="상품이미지"
//           className={`object-scale-down max-h-40 transition-transform duration-300 transform ${
//             hovered === product.id ? "scale-125" : ""
//           }`}
//         />
//       </figure>
//       <div className="card-body bg-gray-100 dark:bg-gray-700">
//         <p className="card-title text-base text-left">{product.title}</p>
//         <p className="text-base text-left">${product.price}</p>
//         <p className="text-base text-left">{category}</p>
//       </div>
//     </Link>
//   ));
// };
// <Link
//   to="/"
//   className="card card-bordered p-0 border-gray-200 dark:border-gray-800 card-compact lg:card-normal overflow-hidden relative"
//   onMouseEnter={handleMouseEnter}
//   onMouseLeave={handleMouseLeave}
// >
//   <figure className="flex h-80 bg-white overflow-hidden items-center justify-center transition-transform duration-300 transform">
//     <img
//       src={product.image}
//       alt="상품이미지"
//       className={`object-scale-down max-h-40 transition-transform duration-300 transform ${
//         hovered ? "scale-125" : ""
//       }`}
//     />
//   </figure>
//   <div className="card-body bg-gray-100 dark:bg-gray-700">
//     <p className="card-title text-base text-left">{product.title}</p>
//     <p className="text-base text-left">${product.price}</p>
//     <p className="text-base text-left">{category}</p>
//   </div>
// </Link>

export default ProductCard;
