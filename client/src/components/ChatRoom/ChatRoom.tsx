import React from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

const ChatRoom = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);

  return <div></div>;
};

export default ChatRoom;
