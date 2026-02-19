"use client";

import { CheckoutLayout } from "@/components/checkout/CheckoutLayout";
import { CheckoutInformation } from "@/components/checkout/CheckoutInformation";
import { useRouter } from "next/navigation";

export default function InformationPage() {
  const router = useRouter();

  return (
    <CheckoutLayout step={1}>
      <CheckoutInformation onNext={() => router.push("/checkout/shipping")} />
    </CheckoutLayout>
  );
}
