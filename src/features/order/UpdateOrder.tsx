"use client";

import { useFormState } from "react-dom";

import Button from "@/ui/Button";

import type { Order } from "@/services/apiRestaurantTypes";
import { makePriority } from "@/actions/actions";

interface UpdateOrderProps {
  order: Order;
}

export default function UpdateOrder({ order }: UpdateOrderProps) {
  const [formState, action] = useFormState(makePriority, {
    message: "",
  });

  return (
    <form action={action} method="POST" className="ml-auto w-fit">
      <input type="hidden" name="order" value={JSON.stringify(order)} />
      <Button type="primary">Make priority</Button>
    </form>
  );
}
