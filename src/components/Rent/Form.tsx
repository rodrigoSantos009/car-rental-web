import { useState } from "react";
import { useAuth } from "../../contexts/Auth/UseAuth";

export function Form() {
  const {name, email} = useAuth()
  const [customerName, setCustomerName] = useState(name)
  const [country, setCountry] = useState("")
  const [customerEmail, setCustomerEmail] = useState(email)
  const [customerNumber, setCustomerNumber] = useState("")


  return (
    <div>
      <form action="" className="form">
        <div className="flex flex-col col-span-2 md:col-span-1 opacity-40">
          <label className="label-registration-form">Nome Completo*</label>
          <input
            disabled
            className="cursor-not-allowed input-registration-form"
            type="text"
            value={customerName}
          />
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1 opacity-40">
          <label className="label-registration-form">Nacionalidade*</label>
          <input
            disabled
            className="cursor-not-allowed input-registration-form"
            type="text"
            value="Brasil"
          />
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1">
          <label htmlFor="">E-mail*</label>
          <input
            className="input-registration-form"
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1">
          <label htmlFor="">Número*</label>
          <input
            className="input-registration-form"
            type="text"
            value={customerNumber}
            onChange={(e) => setCustomerNumber(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}