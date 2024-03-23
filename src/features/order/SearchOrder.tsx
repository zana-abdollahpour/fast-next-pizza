"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import type { FormEvent } from "react";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query) return;
    router.push(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order number"
        value={query}
        onChange={(e) => setQuery(e.target.value.trim())}
      />
    </form>
  );
}
