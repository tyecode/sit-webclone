import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Assets/scss/global.scss";
import "swiper/css/bundle";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollButton from "./Components/ScrollButton";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
    <ScrollButton />
  </React.StrictMode>
);
