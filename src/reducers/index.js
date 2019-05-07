import { combineReducers } from 'redux';
import CarsReducer from './CarsReducer';
import type { State } from '../types/ReducerTypes.d';

const reducers = { CarsReducer };

type Reducer<S, A> = (state: S | void, action: A) => S;

const allReducers: Reducer<State, any> = combineReducers(reducers);

export default allReducers;
