import React from "react";
import Header from "../Header/Header";
import * as S from "./Layout.style";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <S.Body>{children}</S.Body>
    </>
  );
};

export default Layout;
