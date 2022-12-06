import create from "zustand";
import { persist } from "zustand/middleware";

export type ChatRoom = {
  id: string;
  roomname: string;
};

export interface ChatRoomStore {
  chatRoomList: ChatRoom[];
  createChatRoom: (roomname: string) => void;
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
    createChatRoom: (roomname: string) => {
      set((state) => ({
        chatRoomList: [
          ...state.chatRoomList,
          {
            id: Date.now().toString(),
            roomname,
          },
        ],
      }));
    },
    // 채팅방 삭제
    deleteChatRoom: (id: string) => {
      set((state) => ({
        chatRoomList: state.chatRoomList.filter(
          (chatRoom) => chatRoom.id !== id
        ),
      }));
    },
  }))
);
