import React from "react";
import { Outlet } from "react-router-dom";
import "../../assets/css/layout/Layout.css";
import Header from "./Header";
import Footer from "./Footer";
function Layout() {
  return (
    <>
      <div className="layout-wrapper">
        <Header />
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
