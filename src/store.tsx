import { createStore, combineReducers } from 'redux';
import reducer from './modules/module';

const configureStore = () =>
  createStore(
    combineReducers({
      reducer
    })
  );

export default configureStore;
