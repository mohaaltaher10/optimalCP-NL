import React from 'react';

export function Logo({ className = "w-8 h-8", variant = "blue" }: { className?: string; variant?: "blue" | "burgundy" }) {
  if (variant === "blue") {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="22" fill="#2563eb"/>
        <path d="M30 38L15 50L30 62" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M70 38L85 50L70 62" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M42 70L58 30" stroke="#93c5fd" strokeWidth="7" strokeLinecap="round"/>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#8b2626"/>
      <path d="M30 38L15 50L30 62" stroke="#e2b874" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M70 38L85 50L70 62" stroke="#e2b874" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M42 70L58 30" stroke="#ffffff" strokeWidth="7" strokeLinecap="round"/>
    </svg>
  );
}
