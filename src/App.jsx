import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { RecoilRoot } from "recoil";
import Main from "./views/Main";
import Fashion from "./views/Fashion";
import Digital from "./views/Digital";
import Accessory from "./views/Accessory";
import NotFound from "./views/NotFound";
import ProductDetail from "./views/ProductDetail";
import Cart from "./views/Cart";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/Fashion"} element={<Fashion />} />
        <Route path={"/Digital"} element={<Digital />} />
        <Route path={"/Accessory"} element={<Accessory />} />
        <Route path={"/NotFound"} element={<NotFound />} />
        <Route path={"/product/:id"} element={<ProductDetail />} />
        <Route path={"/Cart"} element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
