import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import ScrollToTop from "../scroll_top/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
