import Image from "next/image";

import { formatCurrency } from "@/utils/helpers";

import type { Pizza } from "@/types/pizza";

interface MenuItemsProps {
  pizza: Pizza;
}

export default function MenuItem({ pizza }: MenuItemsProps) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <Image src={imageUrl} alt={name} height={320} width={320} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}
