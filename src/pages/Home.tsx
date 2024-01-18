import { Main } from "../components/Home/Main";
import { ContentBox } from "../components/Home/ContentBox";
import { PlanTrip } from "../components/Home/PlanTrip";
import { PickCar } from "../components/Home/PickCar";

export function Home() {
  return (
  <div className="w-5/6 m-auto h-full home">
    <Main /> 
    <ContentBox />
    <PlanTrip />
    <PickCar />
  </div>  
  )
}