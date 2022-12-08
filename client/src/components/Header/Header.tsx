import { Link, useMatch } from "react-router-dom";
import * as S from "./Header.style";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import { Text } from "@nextui-org/react";

/**
 * Header 컴포넌트
 */
const Header = () => {
  const { nickname, setNickname } = useAuth();

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
      {!isAuth && !isHome && (
        <Text
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: "1rem",
            border: "none",
            background: "none",
            flexBasis: "auto",
            color: "white",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          <Link to="/">홈</Link>
        </Text>
      )}
      <Text h1 size="$2xl" color="white">
        {(isHome && nickname) || (isAuth && "Auth") || "채팅방"}
      </Text>
      {/**
       * 로그인 상태일 때만 로그아웃 버튼을 보여준다.
       */}
      {!isAuth ? (
        <Text
          onClick={onLogout}
          size="$sm"
          color="white"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: "1rem",
            border: "none",
            background: "none",
            flexBasis: "auto",
            color: "white",
            cursor: "pointer",
          }}
        >
          로그아웃
        </Text>
      ) : null}
    </S.Header>
  );
};

export default Header;
