"use client";

import Image from "next/image";

import { formatCurrency } from "@/utils/helpers";
import Button from "@/ui/Button";
import { useAppDispatch } from "@/lib/hooks";
import { addItem } from "@/features/cart/cartSlice";

import type { Pizza } from "@/features/menu/pizzaTypes";

interface MenuItemsProps {
  pizza: Pizza;
}

export default function MenuItem({ pizza }: MenuItemsProps) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useAppDispatch();

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2 pt-1">
      <Image
        src={imageUrl}
        alt={name}
        height={96}
        width={96}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {!soldOut && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}
