import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Videos from "./Pages/videos/Videos.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

// Create a layout component that includes the Navbar
const Layout = () => (
  <>
    <Navbar />
    <Outlet /> {/* This renders the child routes (App or Videos) */}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />, // Use the Layout for all routes
    children: [
      { path: "/", element: <App /> },
      { path: "/Videos", element: <Videos /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
