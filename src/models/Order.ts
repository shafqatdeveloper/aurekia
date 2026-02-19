import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: String,
        price: Number,
        quantity: { type: Number, default: 1 },
        image: String,
      },
    ],
    totalAmount: { type: Number, required: true },
    shippingAddress: {
      firstName: String,
      lastName: String,
      address: String,
      city: String,
      postcode: String,
      country: String,
    },
    status: {
      type: String,
      enum: [
        "Pending",
        "Processed",
        "Shipped",
        "Out for Delivery",
        "Delivered",
      ],
      default: "Pending",
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },
    orderNumber: { type: String, unique: true },
  },
  { timestamps: true },
);

export const Order =
  mongoose.models.Order || mongoose.model("Order", OrderSchema);
