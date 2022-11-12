import React from "react";
import * as S from "./Button.style";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
