"use client";

import Button from "@/ui/Button";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <main className="mt-8 flex h-full flex-col items-center justify-center gap-8 text-xl">
      <h2 className="text-center">Something went wrong!</h2>
      <h2 className="text-center">{error.message}</h2>
      {/* // Attempt to recover by trying to re-render the invoices route */}
      <Button onClick={() => reset()} type="primary">
        Try again
      </Button>
    </main>
  );
}
