import { ChatList } from "../../components/ChatList";
import { ChatModal } from "../../components/ChatModal";
import { FloatButton } from "../../components/FloatButton";
import { useAuth } from "../../hooks/useAuth";
import { useModalStore } from "../../store/useModalStore";

/**
 * Home 페이지
 */
const Home = () => {
  const { userId } = useAuth();
  const { openModal } = useModalStore();

  const onCreateChatRoom = () => {
    openModal();
  };

  return (
    <>
      <ChatList />
      <ChatModal />
      {userId !== 0 && <FloatButton onClick={onCreateChatRoom} />}
    </>
  );
};

export default Home;
