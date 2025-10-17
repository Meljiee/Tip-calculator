"use client";

interface TipSelectionProps {
  selectedTip: number | null;
  customTip: string;
  onTipSelect: (percentage: number) => void;
  onCustomTipChange: (value: string) => void;
}

const tipPercentages = [5, 10, 15, 25, 50];

export default function TipSelection({selectedTip,customTip,onTipSelect,onCustomTipChange,}: TipSelectionProps) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-4 text-grey-500">Select Tip %</label>
      <div className="grid grid-cols-2 gap-3">
        {tipPercentages.map((percentage) => (
          <button key={percentage}
                  type="button"
                  onClick={() => onTipSelect(percentage)}
                  className={`h-12 text-xl font-bold rounded-lg transition-colors 
                  ${selectedTip === percentage ? "bg-green-400 text-white"
                    : "bg-green-900 text-white hover:bg-green-400"}`
                   }
          >
          {percentage}%
          </button>
        ))}
        <input
          type="number"
          placeholder="Custom"
          value={customTip}
          onChange={(e) => onCustomTipChange(e.target.value)}
          className={`h-12 text-center text-xl font-bold rounded-lg border-2
            bg-grey-50 text-green-900
            ${customTip ? "border-green-400" : "border-grey-200"}
            focus:outline-none focus:border-green-400`}
        />
      </div>
    </div>
  );
}
