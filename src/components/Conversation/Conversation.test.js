import React from 'react';
import { expect } from 'chai'
import { shallow, render } from 'enzyme'
import Conversation from './Conversation';
import Message from '../Message/Message';
import { messages } from '../../constants/messages'
import { users } from '../../constants/users'

describe('<Conversation />', () => {
    it('should match its reference snapshot', () => {
        const wrapper = render(
            <Conversation
                messages={messages}
                users={users}
                currentUserId={1} />
        );

        expect(wrapper).to.matchSnapshot()
    })

    it('should render all messages', () => {
        const wrapper = shallow(
            <Conversation
                messages={messages}
                users={users} />
        );

        expect(wrapper.find(Message)).to.have.length(messages.length);
    })
})