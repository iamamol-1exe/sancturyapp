"use client";
import socket from "@/app/lib/socket";
import React, { createContext, useContext, useEffect } from "react";

const SocketContext = createContext(socket);
export const useSocket = () => useContext(SocketContext);

export const SocketContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
