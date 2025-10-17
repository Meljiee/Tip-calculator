"use client";

import Header from "./Components/Header";
import Billsection from "./Components/Bills-section";
import TipSection from "./Components/Tip-Section";
import PeopleInput from "./Components/PeopleNum-Section";
import ResultDisplay from "./Components/ResultBox-Section";
import { calculateTip } from "../utils/Calculation";
import { useMemo, useState } from 'react';

export default function Home() {
  const [bill, setBill] = useState<string | number>("");
  const [people, setPeople] = useState<string | number>("");
  const [selectedTip, setSelectedTip] = useState<number | null>(null);
  const [customTip, setCustomTip] = useState<string>("");

  const numericBill = typeof bill === "string" && bill !== "" ? parseFloat(bill) : Number(bill) || 0;
  const numericPeople = typeof people === "string" && people !== "" ? parseInt(people, 10) : Number(people) || 0;
  const tipPercent = selectedTip ?? (customTip !== "" ? Number(customTip) : 0);

  const { tipAmount, total } = useMemo(() => {
    return calculateTip(numericBill, numericPeople, isNaN(tipPercent) ? 0 : tipPercent);
  }, [numericBill, numericPeople, tipPercent]);

  const isResetActive = numericBill > 0 || numericPeople > 0 || tipPercent > 0 || customTip !== "";

  const handleReset = () => {
    setBill("");
    setPeople("");
    setSelectedTip(null);
    setCustomTip("");
  };

  return (
    <>
      <Header/>
      <div className="grid gap-6 p-4 max-w-3xl mx-auto">
        <Billsection bill={bill} onBillChange={setBill} />
        <TipSection
          selectedTip={selectedTip}
          customTip={customTip}
          onTipSelect={(p) => { setSelectedTip(p); setCustomTip(""); }}
          onCustomTipChange={(v) => { setCustomTip(v); setSelectedTip(null); }}
        />
        <PeopleInput people={people} onPeopleChange={setPeople} />
        <ResultDisplay
          tipAmount={tipAmount}
          total={total}
          bill={bill}
          selectedTip={selectedTip}
          customTip={customTip}
          people={people}
          handleReset={handleReset}
          isActive={isResetActive}
        />
      </div>
    </>
  );
}
