import Link from "next/link";

export default function EmptyCart() {
  return (
    <div>
      <Link href="/menu">&larr; Back to menu</Link>
      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}
