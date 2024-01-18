import { useEffect, useState } from "react"
import { api } from "../../lib/axios"
import { CarsInfo } from "../../types/CarType"

import { BsFillPersonFill } from "react-icons/bs"
import { RentCarButton } from "../Rent/RentCarButton"

export function CarModels() {
  const [cars, setCars] = useState<CarsInfo>([])

  useEffect(() => {
    api.get("/cars").then((res) => {
      setCars(res.data);
    });
  }, []); 

  return (
    <div className="models">
      <h1>Grupo de Carros</h1>
      <div className="models-car">
        {cars.map((car, id) => (
          <div key={id} className="cars">
            {car.car_image && (
              <img
                width={250}
                src={`http://localhost:3333/uploads/${car.car_image.url}`}
                alt={car.model}
                className="image"
              />
            )}
            <div className="text-center">
              <p className="text-center text-base font-semibold">{car.model}</p>
            </div>
            <div className="w-full grid grid-cols-2 gap-2 mt-10  text-center ">
              <p className="bg-zinc-200 p-1">{car.doors} portas</p>
              <p className="bg-zinc-200 p-1 flex items-center gap-2">
                &nbsp; <BsFillPersonFill className="text-zinc-500 text-xl" />
                {car.passengers}&nbsp; pessoas
              </p>
              <p className="text-center bg-zinc-200 p-1">Ano {car.year}</p>
              <p className="text-center bg-zinc-200 p-1">
                {car.available ? "Disponível" : "Não disponível"}
              </p>
            </div>
            <div className="w-full mt-4">
              <RentCarButton available={car.available} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
}