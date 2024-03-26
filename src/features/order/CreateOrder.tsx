"use client";

import { useFormState } from "react-dom";

import { submitOrder } from "@/actions/actions";
import Button from "@/ui/Button";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export default function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const [formState, action] = useFormState(submitOrder, {
    message: "",
  });

  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let&apos;s go!</h2>

      <form action={action}>
        <div>
          <label>First Name</label>
          <div>
            <input className="input" type="text" name="customer" required />
          </div>
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input className="input" type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="focus: h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        {formState?.message ? (
          <div className="my-2 rounded border border-red-400 bg-red-200 p-2">
            {formState.message}
          </div>
        ) : null}

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button>Order now</Button>
        </div>
      </form>
    </div>
  );
}
