import { useForm } from "react-hook-form";
import { Button } from "../Atoms/Button";
import { TextInput } from "../Atoms/TextInput";
import * as S from "./AuthForm.style";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface AuthFormState {
  nickname: string;
}

/**
 * - AuthForm 컴포넌트
 * - 닉네임을 설정하는 폼
 */
const AuthForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthFormState>();
  const { setNickname } = useAuth();

  const navigate = useNavigate();

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
    /**
     * submit 이벤트 발생 시 Home으로 이동
     */
    navigate("/");
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
    /**
     * 익명 로그인 시 Home으로 이동
     */
    navigate("/");
  };

  /**
   * nickname을 3글자 이상 입력하지 않았을 때 에러 메시지
   */
  const onInValid = () => {
    const { nickname } = errors;
    if (nickname) {
      toast.error("3글자 이상 입력해주세요.");
    }
  };

  return (
    <S.AuthFormContainer>
      <S.AuthForm onSubmit={handleSubmit(onValid, onInValid)}>
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
