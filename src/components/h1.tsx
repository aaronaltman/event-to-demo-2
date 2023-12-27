import React from "react";
import { twMerge } from "tailwind-merge";

type MyH1Props = {
  children: React.ReactNode;
  className?: string; // Made optional with '?'
};

export default function MyH1({ children, className = "" }: MyH1Props) {
  return (
    <h1 className={twMerge("text-5xl capitalize py-4", className)}>
      {children}
    </h1>
  );
}
