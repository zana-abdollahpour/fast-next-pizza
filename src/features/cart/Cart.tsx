"use client";

import LinkButton from "@/ui/LinkButton";
import Button from "@/ui/Button";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getUsername } from "@/features/user/userSlice";
import { clearCart, getCart } from "./cartSlice";

import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

// shows current cart items
export default function Cart() {
  const username = useAppSelector(getUsername);
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton href="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" href="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}
