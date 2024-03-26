import Link from "next/link";

import SearchOrder from "@/features/order/SearchOrder";
import Username from "@/features/user/Username";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link href="/" className="tracking-widest">
        Fast Next Pizza Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}
