import { Text } from "@nextui-org/react";
import React from "react";

interface ChatTextProps {
  isOwner?: boolean;
  children?: React.ReactNode;
}

const ChatText = ({ children, isOwner = false }: ChatTextProps) => {
  return (
    <>
      {/* isOwner가 true일 때는 오른쪽 정렬, false일 때는 왼쪽 정렬 */}
      {isOwner ? (
        <Text color="primary" style={{ textAlign: "right" }}>
          {children}
        </Text>
      ) : (
        <Text color="text" style={{ textAlign: "left" }}>
          {children}
        </Text>
      )}
    </>
  );
};

export default ChatText;
