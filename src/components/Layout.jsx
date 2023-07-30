import { Outlet } from "react-router-dom";
import Banner from "./Banner.jsx";
import { useState } from "react";

const Layout = () => {
  return (
    <>
      <Banner />
      <Outlet />
    </>
  );
};

export default Layout;
