import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MirrorChat from './MirrorChat';

describe('<MirrorChat />', () => {
    it('should match its reference snapshot', () => {
        const wrapper = shallow(
            <MirrorChat />
        );

        expect(wrapper).to.matchSnapshot()
    })
})