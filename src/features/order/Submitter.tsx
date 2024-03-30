import Button from "@/ui/Button";
import { formatCurrency } from "@/utils/helpers";

interface SubmitterProps {
  totalPrice: number;
  disabled: boolean;
}

// let's the user submit his order to the backend
export default function Submitter({ totalPrice, disabled }: SubmitterProps) {
  return (
    <Button disabled={disabled} type="submit">
      Order now for {formatCurrency(totalPrice)}
    </Button>
  );
}
