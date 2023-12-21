import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col justify-between max-w-7xl min-h-screen mx-auto bg-slate-50">
      {children}
    </div>
  );
}
