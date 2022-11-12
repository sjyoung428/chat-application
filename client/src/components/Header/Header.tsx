import { useMatch } from "react-router-dom";
import { Button } from "../Atoms/Button/Button.style";
import { TextField } from "../Atoms/TextField/TextField.style";
import * as S from "./Header.style";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";

/**
 * Header 컴포넌트
 */
const Header = () => {
  const { setNickname } = useAuth();

  /**
   * 현재 url과 일치하는 path가 있는지 확인
   */
  const isHome = useMatch("/");
  const isAuth = useMatch("/auth");

  const onLogout = () => {
    setNickname("");
    toast.success("로그아웃 되었습니다.");
  };

  return (
    <S.Header>
      <TextField>{(isHome && "Home") || (isAuth && "Auth")}</TextField>
      {/**
       * 로그인 상태일 때만 로그아웃 버튼을 보여준다.
       */}
      {isHome ? (
        <Button onClick={onLogout} isHeader={true}>
          로그아웃
        </Button>
      ) : null}
    </S.Header>
  );
};

export default Header;
