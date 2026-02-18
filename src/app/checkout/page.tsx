"use client";

import React, { useState } from "react";
import { CheckoutLayout } from "@/components/checkout/CheckoutLayout";
import { CheckoutInformation } from "@/components/checkout/CheckoutInformation";
import { CheckoutShipping } from "@/components/checkout/CheckoutShipping";
import { CheckoutPayment } from "@/components/checkout/CheckoutPayment";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";

export default function CheckoutPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart);

  const handleNext = () => {
    if (step < 3) {
      setStep((step + 1) as any);
    } else {
      // Finalize order
      clearCart();
      router.push("/checkout/success");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((step - 1) as any);
    } else {
      router.push("/cart");
    }
  };

  return (
    <CheckoutLayout step={step}>
      {step === 1 && <CheckoutInformation onNext={handleNext} />}
      {step === 2 && (
        <CheckoutShipping onNext={handleNext} onBack={handleBack} />
      )}
      {step === 3 && (
        <CheckoutPayment onNext={handleNext} onBack={handleBack} />
      )}
    </CheckoutLayout>
  );
}
