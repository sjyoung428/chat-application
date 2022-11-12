import React from "react";
import { useMatch } from "react-router-dom";
import * as S from "./Header.style";

const Header = () => {
  const isHome = useMatch("/");
  const isAuth = useMatch("/auth");

  return <S.Header>{(isHome && "Home") || (isAuth && "Auth")}</S.Header>;
};

export default Header;
