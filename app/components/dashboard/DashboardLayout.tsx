"use client";

import React from "react";

import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { ConversationList } from "./ConversationList";
import { ChatArea } from "./ChatArea";

export const DashboardLayout = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-surface-container-lowest overflow-hidden">
      {/* Top Bar */}
      <div className="flex">
        <div className="w-[200px] min-w-[200px]" />
        <TopBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Conversation List */}
        <ConversationList />

        {/* Chat Area */}
        <ChatArea />
      </div>
    </div>
  );
};
