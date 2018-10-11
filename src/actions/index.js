import * as types from '../constants/actionTypes';

/**
 * Add a new message to the chat.
 * @param {*} content Message's content.
 * @param {*} senderId Message sender's id
 */
export const addMessage = (content, senderId) => ({
    type: types.ADD_MESSAGE,
    payload: {
        content: content,
        senderId: senderId
    },
});
