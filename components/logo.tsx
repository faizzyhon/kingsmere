import React from "react";

export const Logo = ({ className = "h-10", showText = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Inherits color from the text class passed via className */}
        <path
          d="M15 55L50 25L85 55"
          stroke="currentColor" 
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M75 45V20H85V35"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Icon accent - uses Sonoma Chardonnay for contrast */}
        <path
          d="M50 45C50 45 30 55 25 80C40 85 50 70 50 70C50 70 60 85 75 80C70 55 50 45 50 45Z"
          fill="var(--secondary)" 
        />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-tighter text-current font-sans uppercase">
            Kingsmere
          </span>
          <span className="text-[10px] font-medium tracking-[0.2em] text-current/80 uppercase">
            Home Improvements
          </span>
        </div>
      )}
    </div>
  );
};