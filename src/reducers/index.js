
import { combineReducers } from 'redux';
import chat from './chat';

// Combining all reducers
const rootReducer = combineReducers({
    chat
});

export default rootReducer;