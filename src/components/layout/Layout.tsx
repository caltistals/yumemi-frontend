import React from "react";
import Header from "../header/Header";
import Layouts from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className={Layouts.main}>{children}</main>
    </>
  );
};

export default Layout;
