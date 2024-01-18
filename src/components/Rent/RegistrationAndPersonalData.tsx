import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IoIosInformationCircle } from "react-icons/Io"
import { Form } from "./Form";
import { CreditCardForm } from "./CreditCardForm";
import { useRent } from "../../contexts/Rent/Rent";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { CarInfo } from "../../types/CarType";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/Auth/UseAuth";
import { formattedDates } from "../../util/formattedDates";
 
export function RegistrationAndPersonalData() {
  const rent = useRent();
  const { carId } = useParams();
  const [car, setCar] = useState<CarInfo>();
  const { token } = useAuth(); 
  const [userId, setUserId] = useState("");

  const date = formattedDates(rent.rentDate, rent.returnDate);

  const notify = () => toast("Carro alugado com sucesso!");

  const getCar = async () => {
    try {
      await api.get(`/cars/${carId}`).then((res) => {
        setCar(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  const getPerfil = async () => {
    try {
      const perfil = await api.get("/perfil", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserId(perfil.data.id);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getPerfil();
    getCar();
  }, []);

  const HandleRent = () => {
    try {
      api.post(
        "/car/rentals",
        {
          rented_at: rent.rentDate,
          returned_at: rent.returnDate,
          car_id: carId,
          user_id: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      notify();
    } catch (error) {
      throw new Error();
    }
  }

  return (
    <div className="rent-car mb-16">
      <ToastContainer />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="md:col-span-1 lg:col-span-2">
          <div className="mb-4 ">
            <h1 className="text-3xl mb-4">Dados Pessoais</h1>
            <p>Informe seus dados para que possamos efetuar a sua reserva.</p>
          </div>
          <div className="flex border border-zinc-300 p-5 rounded-md items-center gap-3">
            <IoIosInformationCircle className="text-2xl text-red-500" />
            <p className="w-[98%] text-sm ">
              As informações coletadas no cadastro do cliente serão utilizadas
              para identificação das reservas e excução de contrato entre o
              titular e a locadora. Para mais informações sobre o tratamento de
              dados pessoais, acesse nosso Portal de Privacidade.
            </p>
          </div>
          <div className="mt-10">
            <Form />
          </div>
          <div>
            <CreditCardForm />
          </div>
          <div className="mt-10">
            <button
              onClick={HandleRent}
              className="bg-orange-100 px-6 py-2 text-white font-semibold rounded-md"
            >
              Reservar
            </button>
          </div>
        </div>
        <div className="col-span-1 rounded-md flex flex-col grow">
          <div className="text-white bg-gray-300 h-14 text-center ">
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
          <div className="px-7 py-5">
            <h2 className="text-orange-100 font-bold text-lg">Modelo</h2>
            <p>{car?.model}</p>
          </div>
          <div className="px-7 h-[135px] flex flex-col justify-center text-right bg-orange-100            font-semibold rounded-b-md ">
            <h2 className="text-orange-200 text-lg">Valor total</h2>
            <div>
              <p className="text-white">R$ </p>
              <p className="text-white">Em até 6x de R$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}