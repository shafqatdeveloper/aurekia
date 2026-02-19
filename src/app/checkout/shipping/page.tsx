"use client";

import { CheckoutLayout } from "@/components/checkout/CheckoutLayout";
import { CheckoutShipping } from "@/components/checkout/CheckoutShipping";
import { useRouter } from "next/navigation";

export default function ShippingPage() {
  const router = useRouter();

  return (
    <CheckoutLayout step={2}>
      <CheckoutShipping
        onNext={() => router.push("/checkout/payment")}
        onBack={() => router.push("/checkout/information")}
      />
    </CheckoutLayout>
  );
}
