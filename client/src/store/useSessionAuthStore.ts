import create from "zustand";
import { persist } from "zustand/middleware";
import { User } from "./useLocalAuthStore";

export interface SessionAuthStore {
  user: User;
  setUser: (nickname: string) => void;
  logout: () => void;
}

/**
 * 채팅 어플리케이션의 닉네임을 저장하는 스토어
 */

export const useSessionAuthStore = create<SessionAuthStore>()(
  /**
   * persist 미들웨어를 사용하면 스토어의 상태가 sessionStorage에 저장된다.
   */
  persist(
    (set) => ({
      user: {
        id: 0,
        nickname: "",
      },
      setUser: (nickname: string) => {
        set((state) => ({
          user: {
            id: Date.now(),
            nickname,
          },
        }));
      },
      logout: () => {
        set((state) => ({
          user: {
            id: 0,
            nickname: "",
          },
        }));
      },
    }),
    {
      /**
       * sessionStorage에 저장될 때 사용될 키
       */
      name: "nickname",
      getStorage: () => sessionStorage,
    }
  )
);
