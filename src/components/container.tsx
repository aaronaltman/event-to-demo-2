import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between max-w-7xl min-h-screen mx-auto bg-slate-50">
      {children}
    </div>
  );
}
