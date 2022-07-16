import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import accountsReducer from '../reducers/accountsReducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    accountsReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;