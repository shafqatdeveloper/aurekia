"use server";
import connectDB from "@/lib/mongodb";
import { Address } from "@/models/Address";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function getAddresses() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) return { error: "Not authenticated" };

    await connectDB();
    const userId = (session.user as any).id;
    const addresses = await Address.find({ user: userId }).sort({
      createdAt: -1,
    });

    return { success: true, addresses: JSON.parse(JSON.stringify(addresses)) };
  } catch (error) {
    console.error("Fetch addresses error:", error);
    return { error: "Failed to fetch addresses" };
  }
}

export async function addAddress(formData: any) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) return { error: "Not authenticated" };

    await connectDB();
    const userId = (session.user as any).id;

    const count = await Address.countDocuments({ user: userId });
    const isDefault = count === 0;

    const address = await Address.create({
      ...formData,
      user: userId,
      isDefault,
    });

    revalidatePath("/profile");
    return { success: true, address: JSON.parse(JSON.stringify(address)) };
  } catch (error) {
    console.error("Add address error:", error);
    return { error: "Failed to add address" };
  }
}

export async function updateAddress(id: string, formData: any) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) return { error: "Not authenticated" };

    await connectDB();
    const userId = (session.user as any).id;

    const address = await Address.findOneAndUpdate(
      { _id: id, user: userId },
      formData,
      { new: true },
    );

    if (!address) return { error: "Address not found" };

    revalidatePath("/profile");
    return { success: true, address: JSON.parse(JSON.stringify(address)) };
  } catch (error) {
    console.error("Update address error:", error);
    return { error: "Failed to update address" };
  }
}

export async function deleteAddress(id: string) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) return { error: "Not authenticated" };

    await connectDB();
    const userId = (session.user as any).id;

    const address = await Address.findOneAndDelete({ _id: id, user: userId });
    if (!address) return { error: "Address not found" };

    revalidatePath("/profile");
    return { success: true };
  } catch (error) {
    console.error("Delete address error:", error);
    return { error: "Failed to delete address" };
  }
}
