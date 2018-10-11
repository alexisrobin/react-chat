import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

/**
 * Configure store:
 * Create store with the root reducer
 * Apply store state logging middleware
 */
export const configureStore = () => createStore(rootReducer, applyMiddleware(logger));