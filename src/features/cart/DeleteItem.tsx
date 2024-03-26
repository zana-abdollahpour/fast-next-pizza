"use client";

import Button from "@/ui/Button";
import { deleteItem } from "./cartSlice";
import { useAppDispatch } from "@/lib/hooks";

interface DeleteItemProps {
  pizzaId: number;
}

export default function DeleteItem({ pizzaId }: DeleteItemProps) {
  const dispatch = useAppDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}
