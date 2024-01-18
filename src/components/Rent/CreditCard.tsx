import { BsFillFileEarmarkPersonFill } from "react-icons/Bs";

export function CreditCard() {
  return (
    <div>
      <div>
        <h1>Cartão de crédito*</h1>
      </div>
      <div>
        <BsFillFileEarmarkPersonFill />
        <p>
          Para esta oferta é necessário selecionar um cartão de crédito em seu
          nome. Você só será cobrado caso não retire o carro ou cancele a sua
          reserva com menos de 24 horas de antecedência. Se a sua reserva for
          cancelada com antecedência inferior a 24 horas será cobrado o valor de
          R$ 21,89. Em caso de não comparecimento o valor é R$ 54,72.
        </p>
      </div>
      <div>
        <div>
          <h1>Pré autorização</h1>
          <p>
            Ao retirar o veículo na agência será feito um bloqueio referente ao
            valor da reserva no seu cartão de crédito, mas não se preocupe, pois
            ao devolver o carro, solicitaremos a liberação do mesmo. O prazo de
            estorno dependerá do banco emissor do cartão.{" "}
          </p>
        </div>
        <p>
          *O cartão de crédito deve ser da mesma titularidade da pessoa
          cadastrada nos dados pessoais.
        </p>
      </div>
      <div>
        <h1>Adicionar cartão de crédito:</h1>
        
      </div>
    </div>
  );
}