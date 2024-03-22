import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fast Next Pizza - Zana Abdollahpour",
  description: "Final project, designed for Fanap Bootcamp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
