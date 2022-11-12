import express from "express";
import http from "http";
import socket from "./socket";

// port number for the server to listen on (default 8080)
const PORT = 8080;

const app = express();
const server = http.createServer(app);

//웹소켓 서버 생성
socket(server);
server.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
