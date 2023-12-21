"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    {
      if (!searchText) return;
    }
    router.push(`/events/${searchText}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center py-10 items-center gap-5"
    >
      <input
        className="border border-black/10 h-10 p-3 rounded-md"
        type="text"
        placeholder="Start Typing to Search"
        size={30}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="bg-slate-800 text-white px-14 py-2 rounded-lg shadow-sm"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
