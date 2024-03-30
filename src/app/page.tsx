"use client";

import CreateUser from "@/features/user/CreateUser";
import { getUsername } from "@/features/user/userSlice";
import { useAppSelector } from "@/lib/hooks";
import Button from "@/ui/Button";
import Slider from "@/ui/Slider";

export default function HomePage() {
  const username = useAppSelector(getUsername);

  return (
    <div className="relative mt-10 h-[34rem] px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button href="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}

      <Slider />
    </div>
  );
}
