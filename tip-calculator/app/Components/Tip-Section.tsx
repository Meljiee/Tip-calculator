"use client"
import { useState } from "react";

const tipPercentages = [5, 10, 15, 25, 50];

export default function TipSelection() {
  const [selectedTip, setSelectedTip] = useState<number | null>(null);
  const [customTip, setCustomTip] = useState("");

  const handleTipSelect = (percentage: number) => {
    setSelectedTip(percentage);
    setCustomTip("");
  };

  const handleCustomTipChange = (value: string) => {
    setSelectedTip(null); 
    setCustomTip(value);
  };

  return (
    <div>
      <label className="block text-sm font-semibold mb-4 text-grey-500">
        Select Tip %
      </label>

      <div className="grid grid-cols-2 gap-3">
        {tipPercentages.map((percentage) => (
          <button
            key={percentage}
            onClick={() => handleTipSelect(percentage)}
            className={`h-12 text-xl font-bold rounded-lg transition-colors 
              ${selectedTip === percentage
                ? "bg-green-400 text-white"
                : "bg-green-900 text-white hover:bg-green-400"
              }`}
          >
            {percentage}%
          </button>
        ))}

        <input
          type="number"
          placeholder="Custom"
          value={customTip}
          onChange={(e) => handleCustomTipChange(e.target.value)}
          className={`h-12 text-center text-xl font-bold rounded-lg border-2
            bg-grey-50 text-green-900
            ${customTip ? "border-green-400" : "border-grey-200"}
          `}
        />
      </div>
    </div>
  );
}
