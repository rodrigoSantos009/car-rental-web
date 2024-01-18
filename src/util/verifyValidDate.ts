export function verifyValidDate(rentDate: Date, returnDate: Date): boolean {
  const rentMonth = rentDate.getMonth();
  const rentDay = rentDate.getDate();

  const returnMonth = returnDate.getMonth();
  const returnDay = returnDate.getDate();

  if (rentMonth > returnMonth || (rentMonth === returnMonth && rentDay > returnDay)) {
    return false;
  } else if (rentMonth === returnMonth && rentDay === returnDay) {
    return true
  } else {
    return true;
  }
}