import React from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import { useModalStore } from "../../store/useModalStore";
import { useForm } from "react-hook-form";
import { ChatRoom, useChatRoomStore } from "../../store/useChatRoomStore";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";

const ChatModal = () => {
  const { isModalOpen, closeModal } = useModalStore();
  const { createChatRoom } = useChatRoomStore();
  const { userId, nickname } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Pick<ChatRoom, "roomname">>();

  const onValid = ({ roomname }: Pick<ChatRoom, "roomname">) => {
    createChatRoom(roomname, userId, nickname);
    reset();
    closeModal();
  };

  const onInValid = () => {
    const { roomname } = errors;
    if (roomname && roomname.message) {
      toast.error(roomname.message);
    }
  };

  return (
    <Modal open={isModalOpen} onClose={closeModal} closeButton>
      <Modal.Header>
        <Text size={18}>채팅 방 만들기</Text>
      </Modal.Header>
      <Modal.Body as="form" onSubmit={handleSubmit(onValid, onInValid)}>
        <Input
          labelPlaceholder="채팅방 이름"
          {...register("roomname", {
            required: "채팅방 이름을 입력해주세요.",
          })}
        />
        <Modal.Footer>
          <>
            <Button type="submit" color="primary" auto>
              확인
            </Button>
            <Button color="error" auto onPress={closeModal}>
              취소
            </Button>
          </>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default ChatModal;
