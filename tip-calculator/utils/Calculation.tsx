export interface TipResult {
  tipAmount: number;
  total: number;
}

export const calculateTip = (bill: number,people: number,tipPercent: number): TipResult => {
  if (bill > 0 && people > 0)
{
    const tipPerPerson = (bill * (tipPercent / 100)) / people;
    const totalPerPerson = (bill + bill * (tipPercent / 100)) / people;
    return { tipAmount: tipPerPerson, total: totalPerPerson };
  }
  return { tipAmount: 0, total: 0 };
};
