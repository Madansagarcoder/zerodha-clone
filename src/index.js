import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./home/HomePage";
import Signup from "./signup/Signup";
import AboutPage from "./about/AboutPage";
import ProductsPage from "./products/ProductsPage";
import PricingPage from "./pricing/PricingPage";
import SupportPage from "./support/SupportPage";

import NotFound from "../src/NotFound";
import Navbar from "../src/Navbar";
import Footer from "../src/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
    <Footer />
  </BrowserRouter>
);
