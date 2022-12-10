import http from "http";
import { Server } from "socket.io";

interface ChatRoom {
  roomname: string;
  userId: number;
  nickname: string;
}

const socket = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      credentials: true,
    },
  });

  // 방 목록을 가져오는 함수
  const publicRooms = (userId: number, nickname: string) => {
    const {
      sockets: {
        adapter: { sids, rooms },
      },
    } = io;
    const publicRooms: ChatRoom[] = [];
    rooms.forEach((_, key) => {
      if (sids.get(key) === undefined) {
        publicRooms.push({ roomname: key, userId, nickname });
      }
    });
    return publicRooms;
  };

  // 클라이언트와 서버가 연결 될 때 발생하는 이벤트
  io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on(
      "enter_room",
      (roomName: string, userId: number, nickname: string) => {
        // 클라이언트가 방을 생성할 때 발생하는 이벤트
        socket.join(roomName);
        // 특정 방에 입장한 클라이언트에게만 메시지를 보낼 때 발생하는 이벤트
        socket.to(roomName).emit("welcome", socket.id);
        // 모든 소켓에 메시지를 보낼 때 발생하는 이벤트 (Broadcast)
        io.sockets.emit("room_change", publicRooms(userId, nickname));
      }
    );

    // 클라이언트에서 서버로 메시지를 보낼 때 발생하는 이벤트
    socket.on("message", (data) => {
      // 서버에서 클라이언트로 메시지를 보낼 때 발생하는 이벤트
      io.emit("message", data);
    });

    // 클라이언트와 서버의 연결이 끊어질 때 발생하는 이벤트
    socket.on("disconnect", () => {
      console.log("user disconnect", socket.id);
    });
  });
};

export default socket;
