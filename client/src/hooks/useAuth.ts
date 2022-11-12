import { useLocalAuthStore } from "../store/useLocalAuthStore";
import { useSessionAuthStore } from "../store/useSessionAuthStore";

/**
 * Auth관련 로직을 처리하는 커스텀 훅
 * @example
 * ```tsx
 * const { nickname, setNickname } = useAuth();
 * setNickname("익명");
 * ```
 */

export const useAuth = () => {
  const { nickname: localNickname, setNickname: setLocalNickname } =
    useLocalAuthStore();
  const { nickname: sessionNickname, setNickname: setSessionNickname } =
    useSessionAuthStore();

  return {
    nickname:
      localNickname === "" && sessionNickname === ""
        ? ""
        : localNickname || sessionNickname,

    setNickname: (nickname: string) => {
      if (nickname === "") {
        /**
         * 로그아웃 시에는 localStorage와 sessionStorage에 저장된 nickname을 삭제한다.
         */
        setLocalNickname(nickname);
        setSessionNickname(nickname);
        return;
      }
      if (nickname === "익명") {
        /**
         * 익명으로 로그인 시에는 sessionStorage에 nickname을 저장한다.
         */
        setLocalNickname("");
        setSessionNickname(nickname);
        return;
      }
      /**
       * 로그인 시에는 localStorage에 nickname을 저장한다.
       */
      setLocalNickname(nickname);
      setSessionNickname("");
    },
  };
};
