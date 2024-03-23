import { getMenu } from "@/services/apiRestaurant";
import MenuItem from "./MenuItem";

import type { Pizza } from "@/types/pizza";

export default async function Menu() {
  const menu = await getMenu();

  return (
    <ul>
      {menu.map((pizza: Pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}
