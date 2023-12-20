import Link from "next/link";
import React from "react";

const navPages = [
  { title: "Home", path: "/" },
  { title: "Events", path: "/events/all" },
  { title: "Contact", path: "/contact" },
];

export default function Header() {
  return (
    <header className="bg-white p-4 shadow-lg border border-black/10">
      <nav className="flex flex-row justify-between items-center">
        <Link href="/">
          <h1>Search The City</h1>
        </Link>
        <ul className="flex flex-row gap-5">
          {navPages.map(({ title, path }) => (
            <li
              className="text-slate-950/80 p-2 px-6 bg-zinc-50 rounded-full"
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
