import React from "react";
import { Button } from "../Atoms/Button/Button.style";
import Input from "../Atoms/Input/TextInput";
import * as S from "./AuthForm.style";

const AuthForm = () => {
  return (
    <S.AuthForm>
      <Input placeholder="닉네임을 설정해주세요" />
      <Button>설정하기</Button>
      <Button>익명으로 시작하기</Button>
    </S.AuthForm>
  );
};

export default AuthForm;
