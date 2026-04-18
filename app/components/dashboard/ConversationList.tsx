"use client";

import React from "react";
import Image from "next/image";

export type Conversation = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  active?: boolean;
};

const conversations: Conversation[] = [
  {
    id: "1",
    name: "Elena Vance",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwqsmbGr4vfKQkF5UqTMB0N5QgNrsLryzjNBimRfJcX9uZFGm7ZdYWhWqibhcjUF710NxIVYXbBRA2xqKATGp_LlI16_iwsN1KwH366sqp23TqjokW2zaDlxer-AKqbeoqtdWFBEsS_eeZ7b2-GdDdaF7Q-Q8S2uOBGAZrheL9vvlWdK9lEYjqKrih7pL2THb4uEQrzI0XWuIPxke81qTYadbbj2xjJXfmSX27ruLF3FtErnsIsC2M5QuKbuAWEWdVN1IK0RhUaa8",
    lastMessage: "The prototype is ready for review.",
    time: "12:45 PM",
    active: true,
  },
  {
    id: "2",
    name: "Marcus Kane",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEac81djAjwxsKAgExv727WG7jsDNfEl1x_VVzGr1A2G92V54Sv3TYgGyzxWihQNPtybYcR55XvtQGDVOLfgLlZl_9IPsNWWr6-4hdy5Eb7YNn8bg-a0qkJLrzPJQ28fRtqdt21xvSn6F-72ncv-nbAVeq_T9g70FT7JVqEfPG-1nqnA2UD4PFqWU-bn94f0E9QtKs_FQ8bPSjLxNX7LWsuwnsfGkkcxsaAXgL-JPEuK2b0w-SZOA8O3T49ANdxWCBMXqmWiNJFZ0",
    lastMessage: "Let's sync up about the obsidian design t...",
    time: "Yesterday",
  },
  {
    id: "3",
    name: "Strategic Team",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKZL05plucsxuXolu9L86tS92hBc3lfnjpXCyks7yqdzWdXFtTOGWQ11KVEqfYFWzy1v3oIeRBCrUF-cs-o2dBcV-hpXsBpCCjvoO1wcRJf9YFH3hDp7K0L21gvsiz433EaQZQ2e5Lbat1g_MiyfUYCqI3-O0u_tkXYSaADwn-AmoLmUIS_Ejd7_OcMqSKHv5d-LMzaZ6dppDSQ-XA3D-0S3CjveJfRkMlpX9Dmn2jc2SfuXBKr8SPSnszPRZiCCOiIhBpLXZqxeU",
    lastMessage: "Sarah: Updated the project timeline in th...",
    time: "Oct 24",
  },
  {
    id: "4",
    name: "Julianna D.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwqsmbGr4vfKQkF5UqTMB0N5QgNrsLryzjNBimRfJcX9uZFGm7ZdYWhWqibhcjUF710NxIVYXbBRA2xqKATGp_LlI16_iwsN1KwH366sqp23TqjokW2zaDlxer-AKqbeoqtdWFBEsS_eeZ7b2-GdDdaF7Q-Q8S2uOBGAZrheL9vvlWdK9lEYjqKrih7pL2THb4uEQrzI0XWuIPxke81qTYadbbj2xjJXfmSX27ruLF3FtErnsIsC2M5QuKbuAWEWdVN1IK0RhUaa8",
    lastMessage: "Can you send over the final assets for th...",
    time: "Oct 22",
  },
];

type ConversationItemProps = {
  conversation: Conversation;
};

const ConversationItem = ({ conversation }: ConversationItemProps) => {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 cursor-pointer text-left ${
        conversation.active
          ? "bg-primary/10 border border-primary/20"
          : "hover:bg-surface-container border border-transparent"
      }`}
    >
      <div className="w-10 h-10 min-w-[40px] rounded-full overflow-hidden">
        <Image
          src={conversation.avatar}
          alt={conversation.name}
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-sm font-semibold truncate ${
              conversation.active ? "text-on-surface" : "text-on-surface/85"
            }`}
          >
            {conversation.name}
          </span>
          <span className="text-[11px] text-on-surface-variant/60 whitespace-nowrap font-medium">
            {conversation.time}
          </span>
        </div>
        <p className="text-[13px] text-on-surface-variant/60 truncate mt-0.5">
          {conversation.lastMessage}
        </p>
      </div>
    </button>
  );
};

export const ConversationList = () => {
  return (
    <section className="w-[320px] min-w-[320px] bg-surface border-r border-outline-variant/20 flex flex-col">
      {/* Header */}
      <div className="px-5 pt-5 pb-3">
        <h2 className="text-[22px] font-bold text-primary tracking-tight">
          Messages
        </h2>
      </div>

      {/* Conversation Items */}
      <div className="flex-1 overflow-y-auto px-2 pb-4 space-y-0.5 scrollbar-thin">
        {conversations.map((conv) => (
          <ConversationItem key={conv.id} conversation={conv} />
        ))}
      </div>
    </section>
  );
};
