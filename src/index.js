import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Router } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import Info from "./components/Pages/Info";
import Menu from "./components/Pages/Menu";
import Terms from "./components/Pages/Terms";
import OrderNow from "./components/Pages/OrderNow";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/ordernow" element={<OrderNow />} />
    </Routes>

    {/* <App /> */}
  </BrowserRouter>
);
