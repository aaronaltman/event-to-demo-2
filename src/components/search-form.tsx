"use client";

import React from "react";

export default function SearchForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center py-10 items-center gap-5"
    >
      <input
        className="border border-black/10 h-10"
        type="text"
        placeholder="   Search"
        size={30}
      />
      <button
        className="bg-slate-800 text-white p-3 rounded-lg shadow-sm"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
