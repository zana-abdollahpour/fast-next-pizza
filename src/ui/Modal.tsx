"use client";

import { useState } from "react";

import { useAppDispatch } from "@/lib/hooks";
import Button from "./Button";

import { clearCart } from "@/features/cart/cartSlice";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
}

// modal ui component to ask user's permission to clear their cart after submitting an order
export default function Modal({ children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useAppDispatch();

  return isOpen
    ? createPortal(
        <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-yellow-400/10 backdrop-blur-sm">
          <div className="absolute left-1/2 top-1/2 flex h-96 w-80 -translate-x-1/2 -translate-y-1/2 flex-col justify-between rounded-xl bg-yellow-600/95 p-8">
            <p className="text-3xl text-yellow-50">{children}</p>
            <div className="flex justify-between">
              <Button
                type="cancel"
                onClick={() => {
                  dispatch(clearCart());
                  setIsOpen(false);
                }}
              >
                Clear
              </Button>
              <Button type="primary" onClick={() => setIsOpen(false)}>
                Keep Items
              </Button>
            </div>
          </div>
        </div>,
        document?.body,
      )
    : null;
}
