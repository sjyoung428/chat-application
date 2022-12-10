import {
  Button,
  Card,
  Container,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";
import React, { useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import { useAuth } from "../../hooks/useAuth";
import { ChatText } from "../ChatText";

interface ChatFormState {
  comment: string;
}

const socket = io("http://localhost:8080");

const ChatRoom = () => {
  const [comments, setComments] = useState([
    {
      nickname: "",
      message: "",
      id: 0,
      userId: 0,
    },
  ]);
  const { nickname, userId } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChatFormState>();

  useLayoutEffect(() => {
    socket.on("message", ({ nickname, message, userId }) => {
      setComments((prev) => [
        ...prev,
        {
          nickname,
          message,
          id: Date.now(),
          userId,
        },
      ]);
    });
  }, []);

  const onValid = ({ comment }: ChatFormState) => {
    socket.emit("message", { nickname, message: comment, userId });
    reset();
  };

  const onInValid = () => {
    const { comment } = errors;
    if (comment && comment.message) {
      toast.error(comment.message as string);
    }
  };

  return (
    <Container>
      <Card
        style={{
          border: "1px solid black",
          height: "60vh",
          padding: "1rem",
          overflowY: "scroll",
        }}
      >
        {comments.map((comment) => (
          // <Text key={comment.id}>
          //   {comment.nickname} : {comment.message}
          // </Text>
          <div key={comment.id}>
            <ChatText isOwner={comment.userId === userId}>
              {comment.nickname} : {comment.message}
            </ChatText>
          </div>
        ))}
      </Card>
      <Spacer y={2} />
      <Card onSubmit={handleSubmit(onValid, onInValid)} as="form">
        <Input
          {...register("comment", {
            required: "댓글을 입력해주세요.",
          })}
          aria-label="댓글 쓰기"
          placeholder="댓글을 입력하세요"
        />
        <Button type="submit" auto>
          등록
        </Button>
      </Card>
    </Container>
  );
};

export default ChatRoom;
