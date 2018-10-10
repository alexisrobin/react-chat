import { expect } from 'chai'
import { addMessage } from '../actions';
import chat, { initialState } from './chat';

describe('reducer/chat', () => {
    it('should return the initial state', () => {
        expect(
            chat(undefined, {})
        ).to.equal(initialState);
    })

    it('should add message to chat', () => {
        expect(
            chat(undefined, addMessage("Salut", 1)).messages
        ).to.have.length(initialState.messages.length + 1);
    })
})