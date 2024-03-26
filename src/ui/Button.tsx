import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  href?: string;
  type: "primary" | "small" | "secondary";
}

export default function Button({
  children,
  disabled = false,
  href = "",
  type,
}: ButtonProps) {
  const baseStyles =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: `${baseStyles} px-4 py-3 md:px-6 md:py-4`,
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-600 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    small: `${baseStyles} px-4 py-2 md:px-5 md:py-2.5 text-xs`,
  };

  if (href)
    return (
      <Link className={styles[type]} href={href}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
