import React from "react";
import * as S from "./FloatButton.styles";

interface FloatButtonProps {
  onClick?: () => void;
}

const FloatButton = ({ onClick }: FloatButtonProps) => {
  return <S.FloatButton onClick={onClick} />;
};

export default FloatButton;
