import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => (
  <div>
    <Header z-10 />
    <main id="main">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export const LayoutNone: React.FC = () => (
  <div>
    <Outlet />
  </div>
);

export default Layout;
