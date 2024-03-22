import type { Metadata } from "next";
import "./globals.css";

import Header from "@/ui/Header";
import CartOverview from "@/features/cart/CartOverview";

export const metadata: Metadata = {
  title: "Fast Next Pizza - Zana AP",
  description: "Final project, designed for Fanap Bootcamp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
          <Header />

          <div className="overflow-scroll">
            <main className="mx-auto max-w-3xl">{children}</main>
          </div>

          <CartOverview />
        </div>
      </body>
    </html>
  );
}
