export type CarsInfo = {
  id: string
  model: string
  year: number
  doors: number
  passengers: number
  rentalPrice: number
  available: boolean
  car_image: {
    url: string
  }
}[]

export type CarInfo = {
  id: string;
  model: string;
  year: number;
  doors: number;
  passengers: number;
  rentalPrice: number;
  available: boolean;
  car_image: {
    url: string;
  };
};