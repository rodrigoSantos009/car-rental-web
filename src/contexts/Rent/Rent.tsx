import { useContext } from "react"
import { RentContext } from "./Index"

export const useRent = () => {
  const context = useContext(RentContext);

  return context;
}