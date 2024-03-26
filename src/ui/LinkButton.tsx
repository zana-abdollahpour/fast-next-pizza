import Link from "next/link";

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
    >
      {children}
    </Link>
  );
}
