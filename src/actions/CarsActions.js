import type { CarsReceivedAction } from '../types/ActionTypes.d';
import type { TypeCar } from '../types/ReducerTypes.d';

export const CARS_RECEIVED: string = 'CARS_RECEIVED';

export function carsReceived(cars: Array<TypeCar>): CarsReceivedAction {
  return {
    type: CARS_RECEIVED,
    cars,
  };
}
