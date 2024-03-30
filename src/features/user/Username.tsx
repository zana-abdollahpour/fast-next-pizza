"use client";

import { useAppSelector } from "@/lib/hooks";
import { getUsername } from "./userSlice";

// shows the current user's name if it exists
export default function Username() {
  const username = useAppSelector(getUsername);
  return username ? (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  ) : null;
}
