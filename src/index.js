import ReactDOM from "react-dom/client";
import { App } from "./app";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Sale } from "./pages/sale";
import { Item } from "./pages/item";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="sale" element={<Sale />}></Route>
      <Route path="item" element={<Item />}></Route>
    </Routes>
  </BrowserRouter>
);
