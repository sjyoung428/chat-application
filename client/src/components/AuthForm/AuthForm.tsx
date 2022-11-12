import { useForm } from "react-hook-form";
import Button from "../Atoms/Button/Button";
import TextInput from "../Atoms/Input/TextInput";
import * as S from "./AuthForm.style";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";

interface AuthFormState {
  nickname: string;
}

/**
 * - AuthForm 컴포넌트
 * - 닉네임을 설정하는 폼
 */
const AuthForm = () => {
  const { register, handleSubmit, reset } = useForm<AuthFormState>();
  const { setNickname } = useAuth();

  const onValid = ({ nickname }: AuthFormState) => {
    if (nickname === "") {
      toast.error("닉네임을 입력해주세요.");
      return;
    }
    /**
     * localStorage에 nickname을 저장하고 sessionStorage에 nickname을 초기화한다.
     */
    setNickname(nickname);
    toast.success(`${nickname}님 환영합니다!`);
    /**
     * submit 이벤트 발생 시 input값 초기화
     */
    reset();
  };

  const onClickAnonymous = () => {
    /**
     * localStorage에 nickname을 초기화하고 sessionStorage에 nickname을 저장한다.
     */
    setNickname("익명");
    toast.success(`익명님 환영합니다!`);
    /**
     * 익명 로그인 시 input값 초기화
     */
    reset();
  };

  return (
    <S.AuthFormContainer>
      <S.AuthForm onSubmit={handleSubmit(onValid)}>
        <TextInput
          register={register("nickname", {
            minLength: 3, // 닉네임은 최소 2글자 이상
          })}
          placeholder="닉네임을 설정해주세요"
        />
        <Button>설정하기</Button>
      </S.AuthForm>
      <Button onClick={onClickAnonymous}>익명으로 시작하기</Button>
    </S.AuthFormContainer>
  );
};

export default AuthForm;
