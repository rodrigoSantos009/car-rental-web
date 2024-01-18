import { HiLocationMarker, HiOutlineSearch } from "react-icons/hi"
import { BsCalendar2DateFill } from "react-icons/bs"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRent } from "../../contexts/Rent/Rent"
import { verifyValidDate } from "../../util/verifyValidDate"

export function ContentBox() {
  const rent = useRent();
  const [pickUp, setPickup] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [rentDate, setRentDate] = useState(Date)
  const [returnDate, setReturnDate] = useState(Date)
  const navigate = useNavigate();

  const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   const formattedRentDate = new Date(rentDate); 
   const formattedReturnDate = new Date(returnDate);

   if(!verifyValidDate(formattedRentDate, formattedReturnDate)) {
    alert("Data de retorno precisa ser maior que a data de retirada!");
    return;
  }

    const Rent = {
      rentDate: formattedRentDate,
      returnDate: formattedReturnDate,
      pickUp,
      checkOut,
    };
    rent.getRentData(Rent)
      
    navigate("/models");
  }  

  return (
    <div id="pick" className="content">
      <h1 className="text-3xl font-bold mb-5">Escolha seu carro</h1>
      <div className="w-full content-box">
        <form className="content-box-form" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label>
              <HiLocationMarker className="icon" /> &nbsp; Pick Up
            </label>
            <select value={pickUp} onChange={(e) => setPickup(e.target.value)}>
              <option>Selecione o local da retirada</option>
              <option value={"São Paulo"}>São Paulo</option>
              <option value={"Itajaí"}>Itajaí</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>
              <HiLocationMarker className="icon" /> &nbsp; Devolver
            </label>
            <select value={checkOut} onChange={(e) => setCheckOut(e.target.value)}>
              <option>Selecione o local da devolução</option>
              <option value={"São Paulo"}>São Paulo</option>
              <option value={"Itajaí"}>Itajaí</option>
            </select>
          </div>
          <div className="flex flex-col mt-4">
            <label>
              <BsCalendar2DateFill className="icon" /> &nbsp; Data Retirada
            </label>
            <input
              type="date"
              onChange={(e) => setRentDate(e.target.value)}
              value={rentDate}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label>
              <BsCalendar2DateFill className="icon" /> &nbsp; Data Devolução
            </label>
            <input
              type="date"
              onChange={(e) => setReturnDate(e.target.value)}
              value={returnDate}
            />
          </div>
          <div className="mt-4">
            <button className="btn-search" type="submit">
              Procurar &nbsp;
              <HiOutlineSearch className="text-white text-xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}