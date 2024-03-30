import Link from "next/link";
import { useFormStatus } from "react-dom";

import type { FormEvent } from "react";
interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  href?: string;
  type: "primary" | "small" | "secondary" | "round" | "submit" | "cancel";
  onClick?: (() => void) | ((e: FormEvent<HTMLButtonElement>) => void);
}

export default function Button({
  children,
  disabled = false,
  href = "",
  type,
  onClick,
}: ButtonProps) {
  const { pending } = useFormStatus();

  const baseStyles =
    "inline-block text-sm rounded-full font-semibold uppercase tracking-wide transition-colors duration-300  focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed";
  const mainStyles =
    "bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300";
  const cancelStyles =
    "bg-red-500 text-stone-800 hover:bg-red-400 focus:bg-red-400 focus:ring-red-400";
  const secondaryStyles =
    "border-2 border-stone-300 text-stone-600 hover:text-stone-800 focus:text-stone-800 focus:ring-stone-200 px-4 py-2.5 md:px-6 md:py-3.5";

  const styles = {
    primary: `${baseStyles} ${mainStyles} px-4 py-3 md:px-6 md:py-4 disabled:bg-slate-300`,
    secondary: `${baseStyles} ${secondaryStyles}`,
    small: `${baseStyles} ${mainStyles} px-4 py-2 md:px-5 md:py-2.5 text-xs`,
    round: `${baseStyles} ${mainStyles} px-2.5 py-1 md:px-3.5 md:py-2 text-sm`,
    submit: `${baseStyles} ${mainStyles} px-4 py-3 md:px-6 md:py-4 disabled:bg-slate-300`,
    cancel: `${baseStyles} ${cancelStyles} px-4 py-3 md:px-6 md:py-4 disabled:bg-slate-300`,
  };

  if (href)
    return (
      <Link className={styles[type]} href={href}>
        {children}
      </Link>
    );

  if (type === "submit")
    return (
      <button
        type="submit"
        onClick={onClick}
        disabled={pending || disabled}
        className={styles[type]}
      >
        {pending ? "Submitting..." : children}
      </button>
    );

  if (onClick)
    return (
      <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        className={styles[type]}
      >
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
