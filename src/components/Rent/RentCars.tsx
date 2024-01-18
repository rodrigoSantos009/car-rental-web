import { useEffect, useState } from "react";
import { CarsInfo } from "../../types/CarType";
import { api } from "../../lib/axios";
import { BsFillPersonFill } from "react-icons/Bs";
import { useNavigate } from "react-router-dom";
import { useRent } from "../../contexts/Rent/Rent";
import { formattedDates } from "../../util/formattedDates";

type RentCarType = {
  id: string,
  model: string,
  price: number
}

export function RentCars() {
  const rent = useRent();
  const [cars, setCars] = useState<CarsInfo>([])
  const navigate = useNavigate()

  const date = formattedDates(rent.rentDate, rent.returnDate);

  useEffect(() => {
    api.get("/cars").then((res) => {
      setCars(res.data);
    });
  }, []);

  function handleSelect(data: RentCarType) {
    navigate(`/rent/${data.id}`);
  }

  return (
    <div className="rent-car">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="flex col-span-2">
          <div className="flex flex-col grow">
            {cars.map((car, index) => (
              <div key={index} className="w-full flex flex-col gap-3 grow">
                <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-100 p-2 mb-2">
                  <div className="rent-car-car">
                    {car.car_image && (
                      <img
                        src={`http://localhost:3333/uploads/${car.car_image.url}`}
                        alt={car.model}
                        className="image"
                      />
                    )}
                    <div className="text-center">
                      <p className="text-center text-base font-semibold">
                        {car.model}
                      </p>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-2 mt-10  text-center ">
                      <p className="bg-zinc-200 p-1">{car.doors} portas</p>
                      <p className="bg-zinc-200 p-1 flex items-center gap-2">
                        &nbsp;{" "}
                        <BsFillPersonFill className="text-zinc-500 text-xl" />
                        {car.passengers}&nbsp; pessoas
                      </p>
                      <p className="text-center bg-zinc-200 p-1">
                        Ano {car.year}
                      </p>
                      <p className="text-center bg-zinc-200 p-1">
                        {car.available ? "Disponível" : "Não disponível"}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col col-span-1 gap-3 font-semibold">
                    <div
                      onClick={() =>
                        handleSelect({
                          id: car.id,
                          model: car.model,
                          price: car.rentalPrice,
                        })
                      }
                      className={`group p-6 rounded-md shadow-xl hover:bg-orange-100 hover:cursor-pointer transition duration-0 hover:duration-300 ease-in-out hover:text-white  flex flex-col gap-5`}
                    >
                      <p>
                        Oferta Standard <br /> Mínimo 3 diárias
                      </p>
                      <p className="group-hover:text-white">
                        R$ {car.rentalPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col grow rounded-t-md col-span-1">
          <div className="flex flex-col grow rounded-md border border-gray-100">
            <div className="text-white bg-gray-300 h-14 text-center">
              <h1 className="w-full h-full flex justify-center items-center text-orange-100 font-bold text-xl">
                Resumo da Reserva
              </h1>
            </div>
            <hr />
            <div className="px-7 p-5">
              <h2 className="text-orange-100 font-bold text-lg">Retirada</h2>
              <p>{date.formattedRentDate} às 08:00</p>
              <p>{rent.pickUp}</p>
            </div>
            <hr className="w-[90%] mx-auto" />
            <div className="px-7 p-5">
              <h2 className="text-orange-100 font-bold text-lg">Devolução</h2>
              <p>{date.formattedReturnDate} às 08:00</p>
              <p>{rent.checkOut}</p>
            </div>
            <hr className="w-[90%] mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}