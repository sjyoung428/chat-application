import http from "http";
import { Server } from "socket.io";

const socket = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      credentials: true,
    },
  });

  // 클라이언트와 서버가 연결 될 때 발생하는 이벤트
  io.on("connection", (socket) => {
    console.log("New client connected");

    // 클라이언트에서 서버로 메시지를 보낼 때 발생하는 이벤트
    socket.on("message", (data) => {
      console.log("message", data);
      // 서버에서 클라이언트로 메시지를 보낼 때 발생하는 이벤트
      io.emit("message", data);
    });

    // 클라이언트와 서버의 연결이 끊어질 때 발생하는 이벤트
    socket.on("disconnect", () => console.log("user disconnect", socket.id));
  });
};

export default socket;
