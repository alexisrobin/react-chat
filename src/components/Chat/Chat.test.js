import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Chat from './Chat';

describe('<Chat />', () => {
    it('should match its reference snapshot', () => {
        const wrapper = shallow(
            <Chat />
        );

        expect(wrapper).to.matchSnapshot()
    })
})