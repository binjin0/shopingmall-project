import React from "react";
import CartContent from "../components/layout/CartContent";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
const Cart = () => {
  return (
    <div>
      <Nav />
      <section className="main pt-16 w-screen">
        <CartContent />
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
