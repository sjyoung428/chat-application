import React from "react";
import * as S from "./Button.style";

interface ButtonProps {
  children: React.ReactNode;
  isHeader?: boolean;
  isFloat?: boolean;
  onClick?: () => void;
}
/**
 *  Button 컴포넌트
 */
const Button = ({ children, onClick, isHeader = false, isFloat=false }: ButtonProps) => {
  return (
    <S.Button isHeader={isHeader} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
