import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';


export const configureStore = () => createStore(rootReducer, applyMiddleware(logger));
