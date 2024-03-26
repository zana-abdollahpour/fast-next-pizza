"use client";

import { useAppSelector } from "@/lib/hooks";
import { getUsername } from "./userSlice";

export default function Username() {
  const username = useAppSelector(getUsername);
  return username ? (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  ) : null;
}
