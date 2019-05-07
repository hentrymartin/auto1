import { CARS_RECEIVED } from '../actions/CarsActions';
import type { TypeCarReducerState } from '../types/ReducerTypes.d';

// Default state object
const defaultState = {
  cars: [],
};

export default function CarsReducer(state: TypeCarReducerState = defaultState, action: Object) {
  switch (action.type) {
    case CARS_RECEIVED:
      return state;
    default:
      return state;
  }
}
