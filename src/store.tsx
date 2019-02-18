import {
  createStore,
  combineReducers,
  Action,
  Store,
  compose,
  applyMiddleware
} from 'redux';
import reducer, { CounterActions, CounterState } from './modules/module';

const composeEnhancers = compose;

export const configureStore = (): Store =>
  createStore(
    combineReducers({
      reducer
    }),
    composeEnhancers(applyMiddleware())
  );

export default configureStore;

export interface ReduxState {
  reducer: CounterState;
}

export type ReduxAction = CounterActions | Action;
