import { ChatList } from "../../components/ChatList";
import { ChatModal } from "../../components/ChatModal";
import { FloatButton } from "../../components/FloatButton";
import { useAuth } from "../../hooks/useAuth";
import { useModalStore } from "../../store/useModalStore";

/**
 * Home 페이지
 */
const Home = () => {
  const { nickname } = useAuth();
  const { openModal } = useModalStore();

  const onCreateChatRoom = () => {
    openModal();
  };

  return (
    <>
      <ChatList />
      <ChatModal />
      {/* 익명이 아닐 때만 방 생성 가능 */}
      {nickname.length > 2 && <FloatButton onClick={onCreateChatRoom} />}
    </>
  );
};

export default Home;
