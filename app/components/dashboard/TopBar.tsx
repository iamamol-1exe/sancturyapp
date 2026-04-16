"use client";

import React from "react";
import Image from "next/image";
import { Search, Bell, Settings } from "lucide-react";

export const TopBar = () => {
  return (
    <header className="h-[60px] min-h-[60px] bg-surface border-b border-outline-variant/20 flex items-center justify-between px-6 flex-1">
      {/* Search Bar */}
      <div className="flex-1 max-w-[480px] mx-auto">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60"
          />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full bg-surface-container-high border border-outline-variant/20 rounded-xl py-2 pl-10 pr-4 text-sm text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 ml-4">
        <button className="w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all cursor-pointer">
          <Bell size={20} />
        </button>
        <button className="w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all cursor-pointer">
          <Settings size={20} />
        </button>
        <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-primary/30 cursor-pointer hover:ring-primary/60 transition-all">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKZL05plucsxuXolu9L86tS92hBc3lfnjpXCyks7yqdzWdXFtTOGWQ11KVEqfYFWzy1v3oIeRBCrUF-cs-o2dBcV-hpXsBpCCjvoO1wcRJf9YFH3hDp7K0L21gvsiz433EaQZQ2e5Lbat1g_MiyfUYCqI3-O0u_tkXYSaADwn-AmoLmUIS_Ejd7_OcMqSKHv5d-LMzaZ6dppDSQ-XA3D-0S3CjveJfRkMlpX9Dmn2jc2SfuXBKr8SPSnszPRZiCCOiIhBpLXZqxeU"
            alt="User avatar"
            width={36}
            height={36}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};
