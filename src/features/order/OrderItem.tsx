import { formatCurrency } from "@/utils/helpers";

import type { CartItem } from "@/services/apiRestaurantTypes";

interface OrderItemProps {
  item: CartItem;
}

// shows the individual ordered item in a submitted order
function OrderItem({ item }: OrderItemProps) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
