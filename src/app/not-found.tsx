"use client";

import LinkButton from "@/ui/LinkButton";

export default function NotFound() {
  return (
    <div>
      <h1>Something went wrong...</h1>
      <p>This page can not be found.</p>
      <LinkButton href="/">&larr; Back to Home</LinkButton>
    </div>
  );
}
