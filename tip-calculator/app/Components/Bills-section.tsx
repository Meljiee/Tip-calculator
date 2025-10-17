"use client"
import { useState } from "react";
import { DollarSign } from "lucide-react";

export default function BillInput() {
  const [billAmount, setBillAmount] = useState<number | string>("");

  return (
    <>
      <label className="text-green-900 text-sm font-bold">
        Bill
      </label>
      <div className="relative">
        <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="number"
          placeholder="0"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)} // ✅ makes it editable
          className="pl-12 bg-grey-50 border-2 border-grey-200 h-12 w-full text-right text-2xl font-bold text-green-900 placeholder:text-gray-400 rounded-lg focus:outline-none focus:border-green-400"
        />
      </div>
    </>
  );
}