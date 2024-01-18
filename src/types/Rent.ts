export interface IRent {
  rentDate?: Date,
  returnDate?: Date,
  pickUp?: string,
  checkOut?: string,
  carModel?: string,
  
}

export interface IRentContext extends IRent {
  getRentData: (data: IRent) => Promise<any>;
}

export interface IRentProvider {
  children: JSX.Element;
}