import * as types from '../constants/actionTypes';
import { messages } from '../constants/messages';
import { users } from '../constants/users';

const initialState = {
    messages: messages,
    users: users
}

const chat = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_MESSAGE:
            var message = action.payload;
            message.id = state.messages.length;
            message.timestamp = new Date().toISOString();
            return {
                ...state,
                messages: state.messages.concat(message)
            }
        default:
            return state;
    }
}

export default chat;
export { initialState };