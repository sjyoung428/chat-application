import { Text } from "@nextui-org/react";
import React from "react";

interface ChatTextProps {
  isOwner?: boolean;
  children?: React.ReactNode;
}

const ChatText = ({ children, isOwner = false }: ChatTextProps) => {
  return (
    <>
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
