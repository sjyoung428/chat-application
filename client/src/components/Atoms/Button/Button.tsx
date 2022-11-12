import React from "react";
import * as S from "./Button.style";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}
/**
 *  Button 컴포넌트
 */
const Button = ({ children, onClick }: ButtonProps) => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};

export default Button;
