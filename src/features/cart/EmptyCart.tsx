import LinkButton from "@/ui/LinkButton";
import Loader from "@/ui/Loader";

interface EmptyCartProps {
  isPending?: boolean;
}

export default function EmptyCart({ isPending = false }: EmptyCartProps) {
  if (isPending) return <Loader isMini />;

  return (
    <div className="px-4 py-3 ">
      <LinkButton href="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}
