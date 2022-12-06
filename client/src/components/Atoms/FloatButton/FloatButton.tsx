import React from "react";
import * as S from "./FloatButton.styles";
import { FloatButtonIcon } from "./FloatButtonIcon";

interface FloatButtonProps {
  onClick?: () => void;
}

const FloatButton = ({ onClick }: FloatButtonProps) => {
  return (
    <S.FloatButton onClick={onClick}>
      <FloatButtonIcon />
    </S.FloatButton>
  );
};

export default FloatButton;
