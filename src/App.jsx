import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import All_Product from "./Components/All_Products";
import Cart from "./pages/Cart";
import Product_Details from "./pages/Product_Details";
import ProductByCategory from "./pages/ProductByCategory";
import Search_product from "./pages/Search_Product";
import Tranding_Slider from "./Components/Tranding_Slider";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<All_Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product_Details  />} />
        <Route path="/product/category/:cat" element={<ProductByCategory />} />
        <Route path="/product/search/:term" element={<Search_product/>} />
      </Routes>
      <Tranding_Slider />
    </BrowserRouter>
  );
};

export default App;
