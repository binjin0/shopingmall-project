import React from "react";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import ProductHeader from "../components/products/ProductHeader";
import { AccessoriesLoad } from "../components/products/ProductsList";
const Accessory = () => {
  return (
    <div className="w-screen">
      <Nav />
      <div className="main pt-16">
        <div className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>홈</li>
              <li>액세서리</li>
            </ul>
          </div>
          <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
            <ProductHeader pageTitle={"액세서리"} />
            <AccessoriesLoad />
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accessory;
