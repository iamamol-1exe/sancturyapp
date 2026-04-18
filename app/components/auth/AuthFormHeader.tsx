import React from "react";

type AuthFormHeaderProps = {
  title: string;
  subtitle: string;
};

export const AuthFormHeader = ({ title, subtitle }: AuthFormHeaderProps) => {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold tracking-tight text-on-surface">
        {title}
      </h2>
      <p className="text-on-surface-variant mt-2">{subtitle}</p>
    </div>
  );
};
