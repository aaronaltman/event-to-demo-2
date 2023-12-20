import React from "react";

const navPages = [
  { title: "Home", path: "/" },
  { title: "Events", path: "/events/all" },
  { title: "Contact", path: "/contact" },
];

export default function Header() {
  return (
    <header className="bg-slate-100 p-8 shadow-lg">
      <nav className="flex flex-row justify-between items-center">
        <h1>Search The City</h1>
        <ul className="flex flex-row gap-5">
          {navPages.map(({ title, path }) => (
            <li key={path}>
              <a href={path}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
