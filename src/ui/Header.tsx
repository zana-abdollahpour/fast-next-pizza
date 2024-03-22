import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link href="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <p>Zana</p>
    </header>
  );
}
