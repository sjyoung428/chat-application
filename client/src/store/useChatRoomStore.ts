import create from "zustand";
import { persist } from "zustand/middleware";
import { User } from "./useLocalAuthStore";

export type ChatRoom = {
  id: string;
  roomname: string;
  user: User;
};

export interface ChatRoomStore {
  chatRoomList: ChatRoom[];
  createChatRoom: (roomname: string, userId: number, nickname: string) => void;
  deleteChatRoom: (id: string) => void;
}

/**
 *  채팅방 목록을 관리하는 스토어
 */

export const useChatRoomStore = create<ChatRoomStore>()(
  persist((set) => ({
    // 채팅방 목록
    chatRoomList: [],
    // 채팅방 생성
    createChatRoom: (roomname: string, userId: number, nickname: string) => {
      set((state) => ({
        chatRoomList: [
          ...state.chatRoomList,
          {
            id: Date.now().toString(),
            roomname,
            user: {
              id: userId,
              nickname,
            },
          },
        ],
      }));
    },
    // 채팅방 삭제
    deleteChatRoom: (id: string) => {
      set((state) => ({
        chatRoomList: state.chatRoomList.filter((room) => room.id !== id),
      }));
    },
  }))
);
