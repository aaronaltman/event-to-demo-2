import React from "react";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between border-t shadow-sm p-4">
      <small>&copy; 2024 Aaron K. Altman All Rights</small>
      <ul className="flex flex-row gap-5">
        {routes.map((route) => (
          <p>{route.name}</p>
        ))}
      </ul>
    </footer>
  );
}
