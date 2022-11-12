import create from "zustand";
import { persist } from "zustand/middleware";

export interface AuthStore {
  nickname: string;
  setNickname: (nickname: string) => void;
}

/**
 * 채팅 어플리케이션의 닉네임을 저장하는 스토어
 */

export const useAuthStore = create<AuthStore>()(
  /**
   * persist 미들웨어를 사용하면 스토어의 상태가 localStorage에 저장된다.
   */
  persist(
    (set) => ({
      nickname: "익명",
      setNickname: (nickname: string) => set({ nickname }),
    }),
    {
      /**
       * localStorage에 저장될 때 사용될 키
       */
      name: "nickname",
    }
  )
);
