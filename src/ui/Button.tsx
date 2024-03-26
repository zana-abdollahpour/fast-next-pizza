import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  href?: string;
}

export default function Button({
  children,
  disabled = false,
  href = "",
}: ButtonProps) {
  const styles =
    "inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  if (href)
    return (
      <Link className={styles} href={href}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles}>
      {children}
    </button>
  );
}
