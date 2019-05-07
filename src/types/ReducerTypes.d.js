// Type definitions for state object
export type TypeCar = {
  stockNumber: number,
  manufacturer: string,
  model: string,
  color: string,
  mileageNumber: string,
  fuelType: string,
};

export type TypeCarReducerState = {
  cars: Array<TypeCar>,
};

export type State = {
  CarsReducer: TypeCarReducerState,
};
