import React from "react";
const ProductHeader = ({ pageTitle }) => {
  return (
    // <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
    //   <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
    //     {pageTitle}
    //   </h2>
    // </article>
    <div>
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
        {pageTitle}
      </h2>
    </div>
  );
};

export default ProductHeader;
