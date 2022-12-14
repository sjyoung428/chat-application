import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        {/**
         * 라우팅
         * / -> Home
         * /auth -> Auth
         * /:id -> Chat
         */}
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/:id" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
