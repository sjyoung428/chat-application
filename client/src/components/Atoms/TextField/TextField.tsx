import React from "react";
import * as S from "./TextField.style";

interface TextFieldProps {
  children: React.ReactNode;
}

/**
 * TextField 컴포넌트
 */

const TextField = ({ children }: TextFieldProps) => {
  return <S.TextField>{children}</S.TextField>;
};

export default TextField;
