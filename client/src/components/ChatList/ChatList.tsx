import React, { useEffect } from "react";
import { Container, Card, Col, Text, Spacer, Row } from "@nextui-org/react";
import { useChatRoomStore } from "../../store/useChatRoomStore";
import CloseIcon from "../CloseIcon";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

/**
 * 채팅방 목록을 보여주는 컴포넌트
 */
const ChatList = () => {
  const { chatRoomList, deleteChatRoom, createChatRoom } = useChatRoomStore();

  useEffect(() => {
    socket.on("room_change", (rooms) => {
      rooms.forEach(
        (room: { roomname: string; userId: number; nickname: string }) => {
          createChatRoom(room.roomname, room.userId, room.nickname);
        }
      );
    });
  }, []);

  return (
    <Container>
      <Col>
        {chatRoomList.map((room) => (
          <div key={room.id}>
            <Card
              style={{
                padding: "1rem 2rem ",
              }}
            >
              <Row align="center" justify="space-between">
                <Link to={room.id}>
                  <Text>{room.roomname}</Text>
                </Link>
                <CloseIcon
                  onClick={() => {
                    deleteChatRoom(room.id);
                    toast.error("채팅방이 삭제되었습니다.");
                  }}
                />
              </Row>
            </Card>
            <Spacer y={0.5} />
          </div>
        ))}
      </Col>
    </Container>
  );
};

export default ChatList;
