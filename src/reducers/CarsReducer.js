import { CARS_RECEIVED } from '../actions/CarsActions';

const defaultState = {
  cars: [],
};

export default function CarsReducer(state = defaultState, action) {
  switch (action.type) {
    case CARS_RECEIVED:
      return state;
    default:
      return state;
  }
}
