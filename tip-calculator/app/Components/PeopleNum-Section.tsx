"use client"
import { User } from "lucide-react";

interface PeopleInputProps {
  people: string | number;
  onPeopleChange: (value: string | number) => void;
}

export default function PeopleInput({ people, onPeopleChange }: PeopleInputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2 text-grey-500">
        Number of People
      </label>
      <div className="relative">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-grey-400 w-5 h-5" />
        <input
          type="number"
          placeholder="0"
          value={people}
          onChange={(e) => onPeopleChange(e.target.value)}
          className={`pl-12 pr-4 text-right text-2xl font-bold rounded-lg h-12 w-full border-2
            bg-grey-50 text-green-900 placeholder:text-grey-400
            ${people ? "border-green-400" : "border-grey-200"}
            focus:outline-none focus:border-green-400`}
        />
      </div>
    </div>
  );
}
