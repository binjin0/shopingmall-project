import React, { useState } from "react";
// import { ProductLoad } from "../components/products/ProductsList";
import DetailCard from "../components/products/DetailCard";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
const ProductDetail = () => {
  // const [selectedProductId, setSelectedProductId] = useState(null);
  return (
    <div>
      <Nav />
      <section className="main pt-16 w-screen">
        {/* ProductLoad 컴포넌트에 선택된 제품 ID를 전달 */}
        {/* <ProductLoad
          selectedProductId={selectedProductId}
          setSelectedProductId={setSelectedProductId}
        /> */}
        <DetailCard />
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetail;
