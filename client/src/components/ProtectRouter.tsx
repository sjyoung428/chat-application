import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface ProtectRouterProps {
  children: React.ReactNode;
}

/**
 * login 상태에 따라 페이지 접근을 제한하는 컴포넌트
 */

const ProtectRouter = ({ children }: ProtectRouterProps) => {
  const { nickname } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (nickname === "") {
      /**
       * 로그인 상태가 아닐 때는 auth 페이지로 이동
       */
      navigate("/auth", { replace: true });
    }
  }, [nickname, navigate]);

  return <>{children}</>;
};

export default ProtectRouter;
