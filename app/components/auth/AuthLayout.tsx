import React from "react";

import { BrandPanel } from "./BrandPanel";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Ambient glow backgrounds */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-tertiary/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Main card */}
      <main className="relative w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[2rem] shadow-[0_40px_60px_-5px_rgba(13,15,15,0.4)] bg-surface">
        {/* Left brand panel */}
        <BrandPanel />

        {/* Right content panel */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center p-8 lg:p-16 bg-surface">
          <div className="max-w-md mx-auto w-full">{children}</div>
        </div>
      </main>
    </div>
  );
};
