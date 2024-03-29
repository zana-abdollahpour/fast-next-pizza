import { useAppDispatch } from "@/lib/hooks";
import { fetchAddress } from "@/features/user/userSlice";
import Button from "@/ui/Button";

interface LocationGetterProps {
  disabled: boolean;
}

export default function LocationGetter({ disabled }: LocationGetterProps) {
  const dispatch = useAppDispatch();

  return (
    <span className="absolute right-0.5 z-50">
      <Button
        disabled={disabled}
        onClick={(e) => {
          e.preventDefault();
          dispatch(fetchAddress());
        }}
        type="small"
      >
        Get Position
      </Button>
    </span>
  );
}
