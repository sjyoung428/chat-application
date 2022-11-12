import http from "http";
import { Server } from "socket.io";

const socket = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  // 클라이언트와 서버가 연결 될 때 발생하는 이벤트
  io.on("connection", (socket) => {
    console.log("New client connected");
    // 클라이언트와 서버의 연결이 끊어질 때 발생하는 이벤트
    socket.on("disconnect", () => console.log("user disconnect", socket.id));
  });
};

export default socket;
