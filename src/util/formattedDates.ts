export function formattedDates(rentDate: Date | undefined, returnDate: Date | undefined) {
  const formattedRentDate = rentDate?.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedReturnDate = returnDate?.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return {formattedRentDate, formattedReturnDate};
}