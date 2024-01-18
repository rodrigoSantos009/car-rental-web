import selectCar from "../../public/icon1.png"
import Contact from "../../public/icon2.png"
import Drive from "../../public/icon3.png"

export function PlanTrip() {
  return (
    <div className="plan-section">
      <div className="plan-title">
        <h2>Planeje sua viagem agora</h2>
        <h1>Rápido & fácil aluguel de carros</h1>
      </div>
      <div className="plan-boxes">
        <div className="plan-boxes-box">
          <img width={170} height={169} src={selectCar} alt="" />
          <h3>Selecionar Carro</h3>
          <p>Oferecemos uma grande variedade de veículos para todas as suas necessidades de direção. Temos o carro perfeito para atender às suas necessidades.</p>
        </div>
        <div className="plan-boxes-box">
          <img width={170} height={169} src={Contact} alt="" />
          <h3>Contatos Operador</h3>
          <p>Nossos operadores experientes e amigáveis ​​estão sempre prontos para ajudar com qualquer dúvida ou preocupação</p>
        </div>
        <div className="plan-boxes-box">
          <img width={170} height={169} src={Drive} alt="" />
          <h3>Vamos Dirigir</h3>
          <p>Se você está pegando a estrada aberta, nós o cobrimos com nossa ampla gama de carros com o máximo conforto para você e sua família.</p>
        </div>
      </div>
    </div>  
  )
}