import { IRent } from "../../types/Rent";

export function SetRentDataLocalStorage(rent: IRent | null) {
  localStorage.setItem("rent", JSON.stringify(rent));
}

export function GetRentLocalStorage() {
  const json = localStorage.getItem("u")

  if (!json) {
    return null;
  }

  const rentData = JSON.parse(json);

  return rentData || null;
}

export async function getRentDataT(data: IRent) {
  return data;
}