"use client";

import { CheckoutLayout } from "@/components/checkout/CheckoutLayout";
import { CheckoutPayment } from "@/components/checkout/CheckoutPayment";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();

  return (
    <CheckoutLayout step={3}>
      <CheckoutPayment
        onNext={() => router.push("/checkout/review")}
        onBack={() => router.push("/checkout/shipping")}
      />
    </CheckoutLayout>
  );
}
