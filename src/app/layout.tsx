import type { Metadata } from "next";
import "./globals.css";

import Header from "@/ui/Header";
import CartOverview from "@/features/cart/CartOverview";

import StoreProvider from "./StoreProvider";

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
      <body className="bg-body-pattern text-stone-700">
        <StoreProvider>
          <div className="mx-auto grid h-screen max-w-7xl grid-rows-[auto_1fr_auto] bg-stone-100">
            <Header />

            <div className="overflow-scroll">
              <main className="mx-auto max-w-3xl">{children}</main>
            </div>

            <CartOverview />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
