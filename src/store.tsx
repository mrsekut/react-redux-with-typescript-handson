import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import reducer, { MainState, MainActions } from './modules/module';

const composeEnhancers = compose;

const configureStore = () =>
  createStore(
    combineReducers({
      reducer
    }),
    composeEnhancers(applyMiddleware())
  );

export default configureStore;

export type ReduxState = {
  reducer: MainState;
};

export type ReduxAction = MainActions;
