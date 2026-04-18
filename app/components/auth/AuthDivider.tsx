import React from "react";

type AuthDividerProps = {
  text?: string;
};

export const AuthDivider = ({
  text = "or continue with email",
}: AuthDividerProps) => {
  return (
    <div className="relative my-10 flex items-center justify-center">
      <div className="absolute inset-0 flex items-center mt-3">
        <div className="w-full border-t border-outline-variant/20"></div>
      </div>
      <span className="relative bg-surface px-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
        {text}
      </span>
    </div>
  );
};
