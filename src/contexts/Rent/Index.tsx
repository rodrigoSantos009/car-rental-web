import { createContext, useEffect, useState } from "react";
import { IRent, IRentContext, IRentProvider } from "../../types/Rent";
import { GetRentLocalStorage, SetRentDataLocalStorage, getRentDataT } from "./Util";

export const RentContext = createContext<IRentContext>({} as IRentContext);

export const RentProvider = ({ children }: IRentProvider) => {
  const [rentData, setRentData] = useState<IRent | null>(null);

  useEffect(() => {
    const rentData = GetRentLocalStorage();
    if (rentData) setRentData(rentData);
  }, []);

  async function getRentData(rentData: IRent) {
    
  try {
      const response = await getRentDataT(rentData)
      const payload = {
        rentDate: response.rentDate,
        returnDate: response.returnDate,
        pickUp: response.pickUp,
        checkOut: response.checkOut,
      };

      setRentData(payload);
      SetRentDataLocalStorage(payload);

    } catch(error) {
      console.log(error); 
    }
  }

  const rentContextValue: IRentContext = {
    getRentData: getRentData,
    rentDate: rentData?.rentDate,
    returnDate: rentData?.returnDate,
    pickUp: rentData?.pickUp,
    checkOut: rentData?.checkOut
  };

  return (
    <RentContext.Provider value={rentContextValue}>
      { children }
    </RentContext.Provider>  
  )
}