"use client";

import React from "react";
import { Plus, Smile, Send } from "lucide-react";

export const MessageInput = () => {
  return (
    <div className="px-5 py-4 bg-surface border-t border-outline-variant/20">
      <div className="flex items-center gap-3">
        {/* Attach Button */}
        <button className="w-10 h-10 min-w-[40px] rounded-xl flex items-center justify-center text-on-surface-variant/60 hover:bg-surface-container-high hover:text-on-surface-variant transition-all cursor-pointer">
          <Plus size={20} />
        </button>

        {/* Input Field */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Whisper into the sanctuary..."
            className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl py-3 px-4 pr-12 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all"
          />
          {/* Emoji Button */}
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-on-surface-variant transition-all cursor-pointer">
            <Smile size={20} />
          </button>
        </div>

        {/* Send Button */}
        <button className="w-10 h-10 min-w-[40px] rounded-full primary-gradient flex items-center justify-center text-on-primary hover:scale-105 active:scale-95 transition-all shadow-[0_4px_12px_-4px_rgba(13,158,143,0.4)] cursor-pointer">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};
