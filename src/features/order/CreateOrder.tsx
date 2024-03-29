"use client";

import { useState } from "react";
import { useFormState } from "react-dom";

import { submitOrder } from "@/actions/actions";
import { useAppSelector } from "@/lib/hooks";
import EmptyCart from "@/features/cart/EmptyCart";
import { getCart, getTotalCartPrice } from "@/features/cart/cartSlice";
import Submitter from "./Submitter";
import LocationGetter from "./LocationGetter";

export default function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);

  const cart = useAppSelector(getCart);
  const totalCartPrice = useAppSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const {
    username,
    position,
    address,
    status: addressStatus,
    error: errorAddress,
  } = useAppSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";

  const [formState, action] = useFormState(submitOrder, {
    message: "",
  });

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <form action={action} method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            maxLength={24}
            defaultValue={username}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <input
            className="input grow"
            maxLength={11}
            minLength={11}
            type="tel"
            name="phone"
            required
          />
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <input
            className="input grow"
            type="text"
            name="address"
            disabled={isLoadingAddress}
            defaultValue={address}
            required
          />
          {!position.latitude && !position.longitude && (
            <LocationGetter disabled={isLoadingAddress} />
          )}
        </div>

        {formState?.message ||
          (addressStatus === "error" && (
            <div className="my-5 rounded-md border-red-400 bg-red-100 p-2 text-xs text-red-700">
              {formState.message || errorAddress}
            </div>
          ))}

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="focus: h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            checked={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ""
            }
          />
          <Submitter disabled={isLoadingAddress} totalPrice={totalPrice} />
        </div>
      </form>
    </div>
  );
}
