import Button from "@/ui/Button";
import { formatCurrency } from "@/utils/helpers";

interface SubmitterProps {
  totalPrice: number;
  disabled: boolean;
}

export default function Submitter({ totalPrice, disabled }: SubmitterProps) {
  return (
    <Button disabled={disabled} type="submit">
      Order now for {formatCurrency(totalPrice)}
    </Button>
  );
}
