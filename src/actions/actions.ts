"use server";

import { redirect } from "next/navigation";

import { createOrder } from "@/services/apiRestaurant";
import { isValidPhone } from "@/utils/helpers";

export async function submitOrder(
  prevState: { message: string },
  formData: FormData,
) {
  let newOrder;
  try {
    const customer = formData.get("customer");
    const phone = formData.get("phone")! as string;
    const address = formData.get("address");
    const priority = formData.get("priority") === "on";
    const cart = JSON.parse(formData.get("cart") as string);

    if (typeof customer !== "string" || customer.length < 3)
      return { message: "Name must be longer" };

    if (isValidPhone(phone)) return { message: "Invalid phone number" };

    if (typeof address !== "string" || address.length < 10)
      return { message: "Address must be longer" };

    newOrder = await createOrder({
      customer,
      address,
      cart,
      priority,
      phone: +phone,
    });
  } catch (err: unknown) {
    if (err instanceof Error) return { message: err.message };
    return { message: "Something went wrong" };
  }

  if (newOrder) redirect(`/order/${newOrder.id}`);
  return newOrder;
}
