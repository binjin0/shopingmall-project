import React from "react";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import Slider from "../components/common/Slider";
import ItemList from "../components/common/ItemList";
import ProductHeader from "../components/products/ProductHeader";
import { ClothingLimitLoad } from "../components/products/ProductsList";
import { DigitalLoad } from "../components/products/ProductsList";
// import { AccessoriesLoad } from "../components/products/ProductsList";
import { AccessoriesLimitLoad } from "../components/products/ProductsList";
const Main = () => {
  return (
    <div className="w-screen">
      <Nav />
      <Slider />
      <ItemList />
      {/* <div className="overflow-x-auto">
        <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
          <ProductHeader pageTitle={"패션"} />
          <div className=" whitespace-nowrap sm:overflow-x-scroll lg:overflow-hidden">
            <ClothingLimitLoad />
          </div>
        </section>
      </div> */}
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <ProductHeader pageTitle={"패션"} />
        <ClothingLimitLoad />
      </section>
      {/* <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <ProductHeader pageTitle={"액세서리"} />
        <DigitalLoad />
      </section> */}
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <ProductHeader pageTitle={"액세서리"} />
        <AccessoriesLimitLoad />
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <ProductHeader pageTitle={"디지털"} />
        <DigitalLoad />
      </section>
      <Footer />
    </div>
  );
};

export default Main;
