"use client";
import React from "react";

export function OrdersReturns() {
  const orders = [
    {
      id: "#AURE-8921",
      date: "Feb 12, 2026",
      status: "Delivered",
      total: "£1,245.00",
    },
    {
      id: "#AURE-7732",
      date: "Jan 15, 2026",
      status: "Shipped",
      total: "£850.00",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h3 className="text-xl font-serif tracking-widest uppercase">
          Orders & Returns
        </h3>
        <p className="text-sm text-muted-foreground font-sans">
          Track your recent orders or initiate a return.
        </p>
      </div>

      <div className="py-8 border-t border-foreground/5 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-foreground/5">
              <th className="py-4 text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">
                Order ID
              </th>
              <th className="py-4 text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">
                Date
              </th>
              <th className="py-4 text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">
                Status
              </th>
              <th className="py-4 text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 text-right">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-foreground/5">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-secondary/10 transition-colors group"
              >
                <td className="py-5 text-sm font-sans">{order.id}</td>
                <td className="py-5 text-sm font-sans">{order.date}</td>
                <td className="py-5 text-[10px] uppercase tracking-widest font-bold">
                  {order.status}
                </td>
                <td className="py-5 text-sm font-sans text-right">
                  {order.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {orders.length === 0 && (
        <div className="py-20 text-center border-t border-foreground/5">
          <p className="text-sm text-muted-foreground font-sans">
            You haven't placed any orders yet.
          </p>
        </div>
      )}
    </div>
  );
}
