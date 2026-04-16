import React from "react";

type AuthInputProps = {
  id: string;
  label: string;
  type: "email" | "password" | "text";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  action?: React.ReactNode;
  icon?: React.ReactNode;
};

export const AuthInput = ({
  id,
  label,
  type,
  placeholder,
  action,
  value,
  onChange,
  icon,
}: AuthInputProps) => {
  return (
    <div className="space-y-1.5">
      <div
        className={action ? "flex justify-between items-center ml-1" : "ml-1"}
      >
        <label
          className="text-xs font-bold uppercase tracking-widest text-on-surface-variant"
          htmlFor={id}
        >
          {label}
        </label>
        {action}
      </div>
      <div className="relative">
        <input
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          className="w-full bg-surface-container-lowest border-none rounded-xl py-4 pl-5 pr-12 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/30 transition-all outline-none"
          id={id}
          placeholder={placeholder}
          type={type}
        />
        {icon && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 pointer-events-none">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};
