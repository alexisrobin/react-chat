import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Chat from './Chat';
import { messages } from '../../constants/messages';
import { users } from '../../constants/users';

describe('<Chat />', () => {
    it('should match its reference snapshot', () => {
        const wrapper = shallow(
            <Chat 
                messages={messages}
                users={users}
                currentUserId={1}/>
        );

        expect(wrapper).to.matchSnapshot()
    })
})