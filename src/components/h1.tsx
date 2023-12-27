import React from "react";
import { twMerge } from "tailwind-merge";

type MyH1Props = {
  children: React.ReactNode;
  className: string; // Ensure this is included in the destructuring of the component's parameters
};

export default function MyH1({ children, className }: MyH1Props) {
  // Correctly applying the MyH1Props type to the function parameters
  return (
    <h1 className={twMerge("text-5xl capitalize", className)}>{children}</h1>
  );
}
