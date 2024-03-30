import { useAppDispatch } from "@/lib/hooks";
import { fetchAddress } from "@/features/user/userSlice";
import Button from "@/ui/Button";

interface LocationGetterProps {
  disabled: boolean;
}

// gets the current location of user
export default function LocationGetter({ disabled }: LocationGetterProps) {
  const dispatch = useAppDispatch();

  return (
    <span className="absolute right-0.5 top-[2.2rem] z-50 sm:top-[3px]">
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
