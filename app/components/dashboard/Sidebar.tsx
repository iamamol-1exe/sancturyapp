"use client";

import React from "react";
import {
  MessageCircle,
  Video,
  Archive,
  Settings,
  Droplets,
} from "lucide-react";

type NavItem = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

const navItems: NavItem[] = [
  { icon: <MessageCircle size={20} />, label: "Messages", active: true },
  { icon: <Video size={20} />, label: "Video Calls" },
];

const bottomItems: NavItem[] = [
  { icon: <Archive size={20} />, label: "Archived" },
  { icon: <Settings size={20} />, label: "Settings" },
];

export const Sidebar = () => {
  return (
    <aside className="w-[200px] min-w-[200px] bg-surface-container-low flex flex-col border-r border-outline-variant/20">
      {/* Brand Header */}
      <div className="p-5 pb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg primary-gradient flex items-center justify-center shadow-[0_0_16px_rgba(13,158,143,0.25)]">
            <Droplets size={18} className="text-on-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-bold text-on-surface tracking-tight leading-tight">
              Sanctuary
            </span>
            <span className="text-[10px] font-semibold text-primary uppercase tracking-widest leading-tight">
              Active Now
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col gap-0.5 px-3">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
              item.active
                ? "bg-primary/15 text-primary"
                : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      {/* New Chat Button */}
      <div className="px-3 mt-4">
        <button className="w-full py-2.5 rounded-xl primary-gradient text-on-primary font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_6px_16px_-6px_rgba(13,158,143,0.35)] cursor-pointer">
          New Chat
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom Navigation */}
      <nav className="flex flex-col gap-0.5 px-3 pb-5">
        {bottomItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all duration-200 cursor-pointer"
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};
