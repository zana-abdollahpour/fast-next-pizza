import Button from "@/ui/Button";
import { formatCurrency } from "@/utils/helpers";

interface SubmitterProps {
  totalPrice: number;
}

export default function Submitter({ totalPrice }: SubmitterProps) {
  return (
    <Button type="submit">Order now for {formatCurrency(totalPrice)}</Button>
  );
}
