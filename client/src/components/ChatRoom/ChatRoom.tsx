import {
  Button,
  Card,
  Container,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import { useAuth } from "../../hooks/useAuth";

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
    },
  ]);
  const { nickname } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChatFormState>();

  useEffect(() => {
    socket.on("message", ({ nickname, message }) => {
      setComments((prev) => [
        ...prev,
        {
          nickname,
          message,
          id: Date.now(),
        },
      ]);
    });
  }, []);

  const onValid = ({ comment }: ChatFormState) => {
    socket.emit("message", { nickname, message: comment });
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
        }}
      >
        {comments.map((comment) => (
          <Text key={comment.id}>
            {comment.nickname} : {comment.message}
          </Text>
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
