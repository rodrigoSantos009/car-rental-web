export function TotalValueAndAmountInInstallments(
  rentDate: Date,
  returnDate: Date,
  carValue: number | undefined
) {
  rentDate = new Date(`${rentDate}`);
  returnDate = new Date(`${returnDate}`);

  let differenceInTime = returnDate.getTime() - rentDate.getTime();
  let differenceInDays = differenceInTime / (1000 * 3600 * 24);

  let totalValue;
  let amountInInstallments;

  if(differenceInDays === 0) {
    totalValue = carValue;
    if(totalValue !== undefined) amountInInstallments = totalValue / 6;
    return { totalValue, amountInInstallments };
  }

  if (carValue !== undefined) {
    totalValue = differenceInDays * carValue;
    amountInInstallments = totalValue / 6;
  }

  return { totalValue, amountInInstallments };
}