import React from "react";

type GoogleSignInButtonProps = {
  onClick?: () => void;
};

export const GoogleSignInButton = ({ onClick }: GoogleSignInButtonProps) => {
  return (
    <button
      className="w-full h-14 flex items-center justify-center gap-3 bg-surface-container-high hover:bg-surface-container-highest transition-all duration-300 rounded-xl text-on-surface font-semibold glow-hover group"
      onClick={onClick}
      type="button"
    >
      <svg
        className="w-5 h-5 group-hover:scale-110 transition-transform"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 5.04c1.61 0 3.05.55 4.19 1.63l3.14-3.14C17.43 1.68 14.9 1 12 1 7.21 1 3.19 3.84 1.34 7.96l3.66 2.85c.87-2.6 3.31-4.77 6-4.77z"
          fill="#EA4335"
        ></path>
        <path
          d="M23.49 12.27c0-.8-.07-1.57-.2-2.31H12v4.38h6.45c-.28 1.48-1.12 2.74-2.37 3.58l3.68 2.85c2.15-1.99 3.39-4.91 3.39-8.5z"
          fill="#4285F4"
        ></path>
        <path
          d="M5 14.51c-.24-.71-.38-1.47-.38-2.27s.14-1.56.38-2.27L1.34 7.11C.48 8.94 0 10.97 0 13c0 2.03.48 4.06 1.34 5.89l3.66-2.85z"
          fill="#FBBC05"
        ></path>
        <path
          d="M12 23c2.97 0 5.46-1 7.28-2.71l-3.68-2.85c-1.02.68-2.33 1.08-3.6 1.08-2.69 0-5.13-2.17-6-4.77l-3.66 2.85C3.19 20.16 7.21 23 12 23z"
          fill="#34A853"
        ></path>
      </svg>
      Sign in with Google
    </button>
  );
};
