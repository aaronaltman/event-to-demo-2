import React from "react";

export default function MyH1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-5xl capitalize">{children}</h1>;
}
