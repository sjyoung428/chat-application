import create from "zustand";

interface ModalStore {
  /**
   * 모달을 띄울지 여부
   * */
  isModalOpen: boolean;
  /**
   * 모달을 띄우는 함수
   * */
  openModal: () => void;
  /**
   * 모달을 닫는 함수
   * */
  closeModal: () => void;
}

/**
 * 모달을 관리하는 스토어
 * */

export const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));
