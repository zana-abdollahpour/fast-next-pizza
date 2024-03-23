import Order from "@/features/order/Order";

interface CheckOrderPageProps {
  params: {
    orderId: string;
  };
}

export default function CheckOrderPage({
  params: { orderId },
}: CheckOrderPageProps) {
  return <Order orderId={orderId} />;
}
