import { AiFillCheckCircle } from "react-icons/ai"
import { IoArrowForwardCircleSharp } from "react-icons/Io5"
import mainCar from '../../public/main-car.png'

export function Main() {
  return (
    <div className="main">
      <div className="flex flex-col">
        <div className="flex">
          <div>
            <h2 className="plan">Planeje sua viagem agora</h2>
            <h1 className="title">
              Economize
              <span className="text-orange-100"> muito</span> com a Car Rental
            </h1>
            <p className="paragraph">
              Alugue o carro dos seus sonhos. Preços imbatíveis, milhas
              ilimitadas,
              <br /> opções de retirada flexíveis e muito mais.
            </p>
          </div>
        </div>
        <div className="buttons-main">
          <a href="#pick">
            <button className="btn-rent">
              Alugue Agora &nbsp;
              <AiFillCheckCircle className="text-white text-xl" />
            </button>
          </a>
          <a href="#pick">
            <button className="btn-schedule">
              Agendar &nbsp;
              <IoArrowForwardCircleSharp className="text-white text-xl" />
            </button>
          </a>
        </div>
      </div>
      <div className="image-main">
        <img width={830} height={465} src={mainCar} alt="" />
      </div>
    </div>
  );
}