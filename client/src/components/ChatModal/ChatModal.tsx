import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { useModalStore } from "../../store/useModalStore";
import { useForm } from "react-hook-form";
import { ChatRoom, useChatRoomStore } from "../../store/useChatRoomStore";

const ChatModal = () => {
  const { isModalOpen, closeModal } = useModalStore();
  const { createChatRoom } = useChatRoomStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Pick<ChatRoom, "roomname">>();

  const onValid = ({ roomname }: Pick<ChatRoom, "roomname">) => {
    createChatRoom(roomname);
    reset();
    closeModal();
  };

  const onInValid = () => {};

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
