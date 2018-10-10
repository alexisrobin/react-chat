import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Chat from './Chat';
import { messages } from '../../constants/messages';
import { users } from '../../constants/users';

const currentUserId = 1;

describe('<Chat />', () => {
    it('should match its reference snapshot', () => {
        const wrapper = shallow(
            <Chat 
                messages={messages}
                users={users}
                currentUserId={currentUserId}/>
        );

        expect(wrapper).to.matchSnapshot()
    })

    it('should display current user name as header', () => {
        const wrapper = shallow(
            <Chat 
                messages={messages}
                users={users}
                currentUserId={currentUserId}/>
        );

        const currentUserName = users.filter(user => user.id === currentUserId).shift().name;
        expect(wrapper.find(".chat-header").contains(currentUserName)).to.be.true();
    })
})