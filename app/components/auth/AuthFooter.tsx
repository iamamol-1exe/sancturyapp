import React from "react";

type AuthFooterProps = {
  promptText: string;
  linkText: string;
  linkHref: string;
};

export const AuthFooter = ({
  promptText,
  linkText,
  linkHref,
}: AuthFooterProps) => {
  return (
    <>
      <p className="mt-10 text-center text-on-surface-variant text-sm">
        {promptText}
        <a
          className="text-primary font-bold hover:underline ml-1"
          href={linkHref}
        >
          {linkText}
        </a>
      </p>
      <div className="mt-12 pt-8 border-t border-outline-variant/10 flex flex-wrap gap-x-6 gap-y-2 justify-center">
        <a
          className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/40 hover:text-on-surface transition-colors"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/40 hover:text-on-surface transition-colors"
          href="#"
        >
          Terms of Service
        </a>
      </div>
    </>
  );
};
