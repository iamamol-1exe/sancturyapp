"use client";
import { useSocket } from "@/app/context/socketContext";

import React, { useEffect } from "react";

const Home = () => {
  const socket = useSocket();

  useEffect(() => {
    const handleConnect = () => {
      console.log("connected", socket.id);
    };

    const handleMessage = (data: unknown) => {
      console.log(data);
    };

    socket.on("connect", handleConnect);
    socket.on("receive_message", handleMessage);
    socket.on("connect_error", handleMessage);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("receive_message", handleMessage);
    };
  }, [socket]);

  const sendMessage = () => {
    console.log("sending message");
    socket.emit("send_message", { text: "Hello from client" });
  };

  return (
    <div>
      Home
      <div>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Home;
