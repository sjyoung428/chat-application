import React from "react";
import { Toaster } from "react-hot-toast";
import { useMatch } from "react-router-dom";
import { FloatButton } from "../Atoms/FloatButton";
import Header from "../Header/Header";
import * as S from "./Layout.style";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * 어플리케이션의 레이아웃을 담당하는 컴포넌트
 */
const Layout = ({ children }: LayoutProps) => {
  const isAuth = useMatch("/auth");

  return (
    <>
      <Header />
      <S.Body>{children}</S.Body>
      {isAuth ? null : <FloatButton />}
      <Toaster position="bottom-center" />
    </>
  );
};

export default Layout;
