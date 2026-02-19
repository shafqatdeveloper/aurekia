import { useCheckoutStore } from "@/store/useCheckoutStore";
import { ChevronLeft, Lock } from "lucide-react";
import { useState } from "react";

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export function CheckoutPayment({ onNext, onBack }: StepProps) {
  const {
    useShippingAsBilling,
    setUseShippingAsBilling,
    billingAddress,
    setBillingAddress,
  } = useCheckoutStore();

  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [billingData, setBillingData] = useState({
    firstName: billingAddress.firstName || "",
    lastName: billingAddress.lastName || "",
    address: billingAddress.address || "",
    city: billingAddress.city || "",
    postcode: billingAddress.postcode || "",
    country: billingAddress.country || "United Kingdom",
  });

  const formatCardNumber = (val: string) => {
    return val
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim()
      .slice(0, 19);
  };

  const formatExpiry = (val: string) => {
    return val
      .replace(/\D/g, "")
      .replace(/(.{2})/g, "$1/")
      .trim()
      .slice(0, 5);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;
    if (name === "number") formattedValue = formatCardNumber(value);
    if (name === "expiry") formattedValue = formatExpiry(value);
    if (name === "cvv") formattedValue = value.replace(/\D/g, "").slice(0, 4);

    setCardDetails((prev) => ({ ...prev, [name]: formattedValue }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBillingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setBillingData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (cardDetails.number.replace(/\s/g, "").length < 16)
      newErrors.number = "Invalid card number";
    if (!/^\d{2}\/\d{2}$/.test(cardDetails.expiry))
      newErrors.expiry = "Use MM/YY format";
    if (cardDetails.cvv.length < 3) newErrors.cvv = "Invalid CVV";
    if (!cardDetails.name) newErrors.name = "Name is required";

    if (!useShippingAsBilling) {
      if (!billingData.firstName)
        newErrors.billingFirstName = "First name is required";
      if (!billingData.lastName)
        newErrors.billingLastName = "Last name is required";
      if (!billingData.address)
        newErrors.billingAddress = "Address is required";
      if (!billingData.city) newErrors.billingCity = "City is required";
      if (!billingData.postcode)
        newErrors.billingPostcode = "Postcode is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      if (!useShippingAsBilling) {
        setBillingAddress(billingData);
      }
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        onNext();
      }, 1000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-12 animate-in slide-in-from-right duration-500"
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-serif uppercase tracking-widest text-[#333]">
              Payment Details
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">
              Step 3 of 4
            </p>
          </div>
          <div className="flex items-center gap-3 bg-secondary/30 px-4 py-2 rounded-full border border-foreground/5">
            <Lock className="w-3 h-3 opacity-40" />
            <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">
              Secure SSL Encrypted
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <input
              type="text"
              name="number"
              value={cardDetails.number}
              onChange={handleInputChange}
              placeholder="Card Number (0000 0000 0000 0000)"
              className={`w-full border ${errors.number ? "border-red-500" : "border-foreground/10"} px-4 py-4 text-sm focus:outline-none focus:border-[#333] transition-all bg-white placeholder:text-foreground/30`}
            />
            {errors.number && (
              <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">
                {errors.number}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <input
                type="text"
                name="expiry"
                value={cardDetails.expiry}
                onChange={handleInputChange}
                placeholder="Expiry Date (MM/YY)"
                className={`w-full border ${errors.expiry ? "border-red-500" : "border-foreground/10"} px-4 py-4 text-sm focus:outline-none focus:border-[#333] transition-all bg-white placeholder:text-foreground/30`}
              />
              {errors.expiry && (
                <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">
                  {errors.expiry}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleInputChange}
                placeholder="Security Code (CVV)"
                className={`w-full border ${errors.cvv ? "border-red-500" : "border-foreground/10"} px-4 py-4 text-sm focus:outline-none focus:border-[#333] transition-all bg-white placeholder:text-foreground/30`}
              />
              {errors.cvv && (
                <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">
                  {errors.cvv}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <input
              type="text"
              name="name"
              value={cardDetails.name}
              onChange={handleInputChange}
              placeholder="Name on Card"
              className={`w-full border ${errors.name ? "border-red-500" : "border-foreground/10"} px-4 py-4 text-sm focus:outline-none focus:border-[#333] transition-all bg-white placeholder:text-foreground/30 uppercase tracking-widest`}
            />
            {errors.name && (
              <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">
                {errors.name}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-serif uppercase tracking-widest text-[#333]">
          Billing Address
        </h2>
        <div className="space-y-6">
          <label
            className={`flex items-center gap-4 p-8 border-2 ${useShippingAsBilling ? "border-[#333] shadow-lg shadow-black/5" : "border-[#333]/10"} cursor-pointer bg-white group hover:border-[#333]/30 transition-all`}
          >
            <input
              type="checkbox"
              checked={useShippingAsBilling}
              onChange={(e) => setUseShippingAsBilling(e.target.checked)}
              className="w-5 h-5 accent-[#333] cursor-pointer"
            />
            <span className="text-xs font-bold uppercase tracking-widest text-[#333]">
              Same as shipping address
            </span>
          </label>

          {!useShippingAsBilling && (
            <div className="p-8 border-2 border-[#333]/10 bg-secondary/5 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <input
                    type="text"
                    name="firstName"
                    value={billingData.firstName}
                    onChange={handleBillingChange}
                    placeholder="First Name"
                    className={`w-full border ${errors.billingFirstName ? "border-red-500" : "border-foreground/10"} px-4 py-4 text-sm focus:outline-none focus:border-[#333] transition-all bg-white placeholder:text-foreground/30`}
                  />
                </div>
                <div className="space-y-1">
                  <input
                    type="text"
                    name="lastName"
                    value={billingData.lastName}
                    onChange={handleBillingChange}
                    placeholder="Last Name"
                    className={`w-full border ${errors.billingLastName ? "border-red-500" : "border-foreground/10"} px-4 py-4 text-sm focus:outline-none focus:border-[#333] transition-all bg-white placeholder:text-foreground/30`}
                  />
                </div>
              </div>
              <input
                type="text"
                name="address"
                value={billingData.address}
                onChange={handleBillingChange}
                placeholder="Address"
                className={`w-full border ${errors.billingAddress ? "border-red-500" : "border-foreground/10"} px-4 py-4 text-sm focus:outline-none focus:border-[#333] transition-all bg-white placeholder:text-foreground/30`}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  value={billingData.city}
                  onChange={handleBillingChange}
                  placeholder="City"
                  className={`w-full border ${errors.billingCity ? "border-red-500" : "border-foreground/10"} px-4 py-4 text-sm focus:outline-none focus:border-[#333] transition-all bg-white placeholder:text-foreground/30`}
                />
                <input
                  type="text"
                  name="postcode"
                  value={billingData.postcode}
                  onChange={handleBillingChange}
                  placeholder="Postcode"
                  className={`w-full border ${errors.billingPostcode ? "border-red-500" : "border-foreground/10"} px-4 py-4 text-sm focus:outline-none focus:border-[#333] transition-all bg-white placeholder:text-foreground/30`}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-foreground/5">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold opacity-40 hover:opacity-100 transition-opacity group"
        >
          <ChevronLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          Back to Shipping
        </button>
        <button
          type="submit"
          disabled={isProcessing}
          className={`w-full md:w-auto px-16 py-5 bg-[#333] text-white uppercase tracking-widest text-[11px] font-bold transition-all shadow-xl shadow-black/5 flex items-center justify-center gap-4 ${isProcessing ? "opacity-80 cursor-wait" : "hover:bg-black hover:scale-[1.02] active:scale-95"}`}
        >
          {isProcessing ? (
            <>
              <div className="w-4 h-4 border-2 border-white/20 border-t-white animate-spin rounded-full" />
              Processing...
            </>
          ) : (
            "Continue to Review"
          )}
        </button>
      </div>
    </form>
  );
}
