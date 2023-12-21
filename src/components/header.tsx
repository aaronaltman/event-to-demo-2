"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navPages = [
  { title: "Home", path: "/" },
  { title: "Events", path: "/events/all" },
  { title: "Contact", path: "/contact" },
];

export default function Header() {
  const activePathname = usePathname();
  return (
    <header className="bg-white p-4 shadow-lg border border-black/10">
      <nav className="flex flex-row justify-between items-center">
        <Link href="/">
          <h1>Search The City</h1>
        </Link>
        <ul className="flex flex-row gap-5">
          {navPages.map(({ title, path }) => (
            <li
              className={clsx("p-2 px-6rounded-full transition-all", {
                "bg-slate-800 text-white": activePathname === path,
                "hover:bg-slate-800 hover:text-white": activePathname !== path,
              })}
              key={path}
            >
              <a href={path}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
