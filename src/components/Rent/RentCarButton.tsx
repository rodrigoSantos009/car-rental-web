import { useNavigate } from "react-router-dom";
import { useRent } from "../../contexts/Rent/Rent";

export interface ICarId {
  carId: string
}

export function RentCarButton({ available }: { available: boolean }) {
  const rent = useRent();
  const navigate = useNavigate();

  function handleCarRent() {
    if (!rent.rentDate || !rent.returnDate) {
      alert("Escolha as datas antes de continuar!");
      navigate("/");
    } else {
      navigate("/rent/cars");
    }
  }

  return (
    <>
      <button disabled={!available} className="models-button" onClick={handleCarRent}>
        RESERVE AGORA
      </button>
    </>
  );
}
