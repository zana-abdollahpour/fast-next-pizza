import { getMenu } from "@/services/apiRestaurant";
import MenuItem from "./MenuItem";

import type { Pizza } from "@/features/menu/pizzaTypes";

export default async function Menu() {
  const menu = await getMenu();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza: Pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}
