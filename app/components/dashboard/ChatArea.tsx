"use client";

import React from "react";

import { ChatHeader } from "./ChatHeader";
import { MessageBubble } from "./MessageBubble";
import { MessageInput } from "./MessageInput";

const messages = [
  {
    id: "1",
    content:
      "Hey! I've just finished the initial render for the 'Digital Obsidian' theme. The tonal shifts between the surface and the containers look much smoother now without the hard borders.",
    time: "12:38 PM",
    isOwn: false,
  },
  {
    id: "2",
    content:
      "That sounds amazing. Did you manage to use the #66D9CC glow for the active indicators? I really want that bioluminescent sanctuary feel for the sidebar.",
    time: "12:42 PM",
    isOwn: true,
  },
  {
    id: "3",
    content:
      "The prototype is ready for review. Take a look at the glow effects in the bottom corner of the dashboard.",
    time: "12:45 PM",
    isOwn: false,
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWZdOVYsN1jYCg87pDxkJeeUYyniXcwLaAyTBSfdCqq1fG5lcqalVsmiX9ZvxcMeDY0PJrEeaGruc0BEP7E60AhtLFgor1DeQlVAvv5FYgoQPlNmgriZ0-V7k-kl4z9P9v7YAGzDfeBLNibID3DunlyV6xtwEhknOKcT2xADPuju-rXLai2rDkwD82QIu4-v_2kxafrsO6J6bYJiQve2AmFqZy1W3Exybdq823pgJazZCk6h9We4iUOnkHryXjfivVFa7dyWqyIFk",
      alt: "Dashboard prototype preview with glow effects",
      label: "DRAFT_V2.PNG",
    },
  },
];

export const ChatArea = () => {
  return (
    <section className="flex-1 flex flex-col bg-surface-container-low min-w-0">
      {/* Chat Header */}
      <ChatHeader />

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5 scrollbar-thin">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            content={msg.content}
            time={msg.time}
            isOwn={msg.isOwn}
            image={msg.image}
          />
        ))}
      </div>

      {/* Message Input */}
      <MessageInput />
    </section>
  );
};
