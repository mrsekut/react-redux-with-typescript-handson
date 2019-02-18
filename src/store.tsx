import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import reducer from './modules/module';

const composeEnhancers = compose;

const configureStore = () =>
  createStore(
    combineReducers({
      reducer
    }),
    composeEnhancers(applyMiddleware())
  );

export default configureStore;
