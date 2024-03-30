"use client";

import Button from "@/ui/Button";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <main className="mt-8 flex h-full flex-col items-center justify-center gap-8 text-xl">
      <h2 className="text-center text-stone-400">Something went wrong!</h2>
      <h2 className="text-center">Can&apos;t find #{error.digest} order!</h2>
      {/* // Attempt to recover by trying to re-render the invoices route */}
      <div className="flex items-center justify-center gap-10">
        <Button type="primary" href="/">
          &larr; Back to Home
        </Button>
        <Button onClick={() => reset()} type="secondary">
          Try again
        </Button>
      </div>
    </main>
  );
}
