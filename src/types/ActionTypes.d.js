import type { TypeCar } from './ReducerTypes.d';

export type CarsReceivedAction = {
  type: string,
  cars: Array<TypeCar>,
};

export type Actions = CarsReceivedAction;
