import * as types from '../constants/actionTypes';

export const addMessage = (content, senderId) => ({
    type: types.ADD_MESSAGE,
    payload: {
        content: content,
        senderId: senderId
    },
});
