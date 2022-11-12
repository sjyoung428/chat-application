import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalAuthStore } from "../store/useLocalAuthStore";
import { useSessionAuthStore } from "../store/useSessionAuthStore";

interface ProtectRouterProps {
  children: React.ReactNode;
}

/**
 * login 상태에 따라 페이지 접근을 제한하는 컴포넌트
 */

const ProtectRouter = ({ children }: ProtectRouterProps) => {
  const { nickname: localNickname } = useLocalAuthStore();
  const { nickname: sessionNickname } = useSessionAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (localNickname === "" && sessionNickname === "") {
      /**
       * 로그인 상태가 아닐 때는 auth 페이지로 이동
       */
      navigate("/auth", { replace: true });
    } else {
      /**
       * 로그인 상태일 때는 home 페이지로 이동
       */
      navigate("/");
    }
  }, [localNickname, sessionNickname, navigate]);

  return <>{children}</>;
};

export default ProtectRouter;
