import React from "react";

export function Button({
  label,
  type,
  onClick,
}: {
  label: string;
  type: "primary" | "secondary" | "outline-primary" | "outline-secondary";
  onClick?: () => void;
}) {
  const buttonMap = {
    primary: {
      className:
        "w-full py-4 rounded-xl primary-gradient text-on-primary font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_20px_-10px_rgba(13,158,143,0.4)]",
      htmlType: "submit",
    },
    secondary: {
      className:
        "w-full py-4 rounded-xl bg-surface-container-high text-on-surface font-bold text-lg hover:bg-surface-container-highest transition-all",
      htmlType: "button",
    },
    "outline-primary": {
      className:
        "w-full py-4 rounded-xl border border-primary text-primary font-bold text-lg hover:bg-primary/10 transition-all",
      htmlType: "button",
    },
    "outline-secondary": {
      className:
        "w-full py-4 rounded-xl border border-outline-variant/40 text-on-surface font-bold text-lg hover:bg-surface-container-low transition-all",
      htmlType: "button",
    },
  } as const;

  const config = buttonMap[type];
  if (!config) {
    return null;
  }

  return (
    <button
      onClick={onClick}
      className={config.className}
      type={config.htmlType}
    >
      {label}
    </button>
  );
}
