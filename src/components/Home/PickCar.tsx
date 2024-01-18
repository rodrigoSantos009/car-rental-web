import { useState } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/Bs";

import { slides } from "./ImageSlider";

export function PickCar() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
      <div className="pick-car">
        <div className="pick-car-title">
          <h2>Modelos de Veículos</h2>  
          <h1>A nossa frota de aluguel</h1>
          <p>
            Escolha entre uma variedade de nossos incríveis veículos <br /> 
            para alugar para sua próxima aventura ou viagem de negócios.
          </p>
        </div> 
        <div className="pick-container group">
          <div className="pick-container-car left">
            <img 
              width={300} 
              src={slides[currentIndex === 0 ? slides.length -1 : currentIndex - 1 ].url} 
              alt="" 
            />  
            <h3>
              {slides[currentIndex === 0 ? slides.length -1 : currentIndex - 1 ].group}
            </h3>
            <p>
              {slides[currentIndex === 0 ? slides.length -1 : currentIndex - 1 ] .similars}
            </p>
          </div>  
          <div className="pick-container-car main-car">
            <img 
              width={300} 
              src={slides[currentIndex].url} 
              alt="" 
            />  
            <div  onClick={prevSlide} className="w-[360px] flex justify-between absolute top-[20%] -translate-x-0 traslate-y-[50%]">
              <div className="pick-container-car-prev group-hover:block">
              <BsChevronCompactLeft size={30} />
            </div>
            <div  onClick={prevSlide} className="pick-container-car-next group-hover:block">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            </div>
            <h3>
              {slides[currentIndex].group}
            </h3>
            <p>
              {slides[currentIndex].similars}
            </p>
          </div> 
          <div className="pick-container-car right">
            <img 
              width={300} 
              src={slides[currentIndex === slides.length - 1 ? 0 : currentIndex + 1 ].url} 
              alt="" 
            />  
            <h3>
              {slides[currentIndex === slides.length - 1 ? 0 : currentIndex + 1 ].group}
            </h3>
            <p>
              {slides[currentIndex === slides.length - 1 ? 0 : currentIndex + 1 ].similars}
            </p>
          </div> 
        </div> 
      </div>
    ) 
  }