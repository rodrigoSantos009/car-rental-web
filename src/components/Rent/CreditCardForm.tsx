import { useState } from "react";

export function CreditCardForm() {
  const [creditCardNumber, setCreditCardNumber] = useState("")
  const [creditCardValidity, setCreditCardValidity] = useState("")
  const [creditCardOwner, setCreditCardOwner] = useState("")
  const [creditCardSecurityCode, setCreditCardSecurityCard] = useState("")

  const handleCreditCardNumber = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    const limit = 11;
    setCreditCardNumber(e.target.value.slice(0, limit));
  };

  const handleCreditCardValidity = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    const limit = 4;
    const value = e.target.value.slice(0, limit);
    const valueSplittedOne = value.split("").filter((r, index) => index < 2)
    valueSplittedOne.push("/");
    const valueSplittedTwo = value.split("").filter((r, index) => index >= 2); 
    setCreditCardValidity(
      valueSplittedOne.concat(...valueSplittedTwo).join("")
    );
  }; 

  return (
    <div className="mt-20">
      <h1>Adicionar cartão de crédito: </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-4 ">
        <form className="credit-card-form">
          <div className="col-span-2 flex flex-col">
            <label className="font-semibold">Número do cartão*</label>
            <input
              className="input-credit-card-form"
              type="number"
              pattern="[0-9]"
              value={creditCardNumber}
              onChange={handleCreditCardNumber}
            />
          </div>
          <div className="col-span-1 flex flex-col">
            <label className="font-semibold">Validade*</label>
            <input
              className="input-credit-card-form"
              type="number"
              pattern="[0-9]"
              onChange={handleCreditCardValidity}
            />
          </div>
          <div className="col-span-1 flex flex-col">
            <label className="font-semibold">CVC*</label>
            <input
              className="input-credit-card-form"
              type="number"
              onChange={(e) => setCreditCardSecurityCard(e.target.value)}
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="font-semibold">Nome do titular do cartão*</label>
            <input
              className="input-credit-card-form"
              type="text"
              value={creditCardOwner}
              onChange={(e) => setCreditCardOwner(e.target.value)}
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="font-semibold">CPF*</label>
            <input type="text" className="input-credit-card-form" />
          </div>
        </form>
      </div>
    </div>
  );
}