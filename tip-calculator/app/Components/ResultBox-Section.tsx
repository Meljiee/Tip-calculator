"use client";

interface ResultDisplayProps {
  tipAmount: number;
  total: number;
  bill: string | number;
  selectedTip: number | null;
  customTip: string;
  people: string | number;
  handleReset: () => void;
  isActive: boolean;
}

export default function ResultDisplay({tipAmount,total,bill,selectedTip,customTip,people,handleReset, isActive,}: ResultDisplayProps) {
  return (
    <div className="rounded-2xl p-6 space-y-6 bg-green-900">

      <div className="flex justify-between items-center">
        <div>
          <div className="text-white font-semibold">Tip Amount</div>
          <div className="text-sm text-grey-400">/ person</div>
        </div>
        <div className="text-3xl font-bold text-green-400">
          ${tipAmount.toFixed(2)}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <div className="text-white font-semibold">Total</div>
          <div className="text-sm text-grey-400">/ person</div>
        </div>
        <div className="text-3xl font-bold text-green-400">
          ${total.toFixed(2)}
        </div>
      </div>

      <button
        type="button"
        onClick={handleReset}
        className={`w-full h-12 text-xl font-bold rounded-lg transition-all
          bg-green-400 text-green-900
          ${isActive ? "opacity-100 hover:opacity-90" : "opacity-25 cursor-not-allowed"}
        `}
        disabled={!isActive}
      >
        RESET
      </button>
    </div>
  );
}
