import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./Component/About/AboutUs.jsx";
import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/about",
    element: <AboutUs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <Header />
      <RouterProvider router={router} />
    <Footer />
  </>

  // </React.StrictMode>,
);
