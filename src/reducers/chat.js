import { messages } from '../shared/messages';
import { users } from '../shared/users';

const initialState = {
    messages: messages,
    users: users
}

const chat = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default chat;