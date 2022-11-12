import React from "react";
import { StyledComponent } from "styled-components";
import * as S from "./TextInput.style";

interface InputProps {
  placeholder: string;
}

const TextInput = ({ placeholder }: InputProps) => {
  return <S.Input placeholder={placeholder} />;
};

export default TextInput;
