import React from "react";
const ProductHeader = ({ pageTitle }) => {
  return (
    <div>
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
        {pageTitle}
      </h2>
    </div>
  );
};

export default ProductHeader;
