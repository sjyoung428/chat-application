import { ChatList } from "../../components/ChatList";
import { ChatModal } from "../../components/ChatModal";
import { FloatButton } from "../../components/FloatButton/FloatButton.styles";
import { useModalStore } from "../../store/useModalStore";

/**
 * Home 페이지
 */
const Home = () => {
  const { openModal } = useModalStore();
  const onCreateChatRoom = () => {
    openModal();
  };

  return (
    <>
      <ChatList />
      <ChatModal />
      <FloatButton onClick={onCreateChatRoom} />
    </>
  );
};

export default Home;
