"use client";

import { useFormState } from "react-dom";

import { submitOrder } from "@/actions/actions";
import Button from "@/ui/Button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getUsername } from "@/features/user/userSlice";
import { clearCart, getCart } from "@/features/cart/cartSlice";
import EmptyCart from "@/features/cart/EmptyCart";

export default function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const username = useAppSelector(getUsername);
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();
  const [formState, action] = useFormState(submitOrder, {
    message: "",
  });

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <form action={action} onSubmit={() => dispatch(clearCart())}>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <input className="input grow" type="tel" name="phone" required />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <input className="input grow" type="text" name="address" required />
        </div>

        {formState?.message && (
          <div className="my-5 rounded-md border-red-400 bg-red-100 p-2 text-xs text-red-700">
            {formState.message}
          </div>
        )}

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="focus: h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary">Order now</Button>
        </div>
      </form>
    </div>
  );
}
