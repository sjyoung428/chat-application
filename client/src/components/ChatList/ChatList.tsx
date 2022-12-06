import React from "react";
import { Container, Card, Col, Text, Spacer } from "@nextui-org/react";
import { useChatRoomStore } from "../../store/useChatRoomStore";

/**
 * 채팅방 목록을 보여주는 컴포넌트
 */
const ChatList = () => {
  const { chatRoomList } = useChatRoomStore();

  return (
    <Container>
      <Col>
        {chatRoomList.map((room) => (
          <div key={room.id}>
            <Card>
              <Card.Body>
                <Text>{room.roomname}</Text>
              </Card.Body>
            </Card>
            <Spacer y={0.5} />
          </div>
        ))}
      </Col>
    </Container>
  );
};

export default ChatList;
