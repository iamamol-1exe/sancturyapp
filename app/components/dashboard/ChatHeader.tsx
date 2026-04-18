"use client";

import React from "react";
import Image from "next/image";
import { Video, Phone, Info } from "lucide-react";

export const ChatHeader = () => {
  return (
    <div className="h-[64px] min-h-[64px] bg-surface border-b border-outline-variant/20 flex items-center justify-between px-5">
      {/* User Info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/25">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwqsmbGr4vfKQkF5UqTMB0N5QgNrsLryzjNBimRfJcX9uZFGm7ZdYWhWqibhcjUF710NxIVYXbBRA2xqKATGp_LlI16_iwsN1KwH366sqp23TqjokW2zaDlxer-AKqbeoqtdWFBEsS_eeZ7b2-GdDdaF7Q-Q8S2uOBGAZrheL9vvlWdK9lEYjqKrih7pL2THb4uEQrzI0XWuIPxke81qTYadbbj2xjJXfmSX27ruLF3FtErnsIsC2M5QuKbuAWEWdVN1IK0RhUaa8"
            alt="Elena Vance"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[15px] font-bold text-on-surface">
            Elena Vance
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(13,158,143,0.6)]" />
            <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
              Online
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-1">
        <button className="w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all cursor-pointer">
          <Video size={20} />
        </button>
        <button className="w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all cursor-pointer">
          <Phone size={20} />
        </button>
        <button className="w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all cursor-pointer">
          <Info size={20} />
        </button>
      </div>
    </div>
  );
};
