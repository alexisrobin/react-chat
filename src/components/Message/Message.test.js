import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Message, { convertDateFromISOStringToReadableString } from './Message';

const message = {
    content: "testing message",
    timestamp: "2016-10-30T10:28:05"
};

describe('<Message />', () => {
    it('should match its reference snapshot', () => {
        const wrapper = shallow(
            <Message
                message={message}
                senderName={"Max"} />
        );

        expect(wrapper).to.matchSnapshot()
      })

    it('should renders properly message and timestamp', () => {
        const wrapper = shallow(
            <Message
                message={message}
                senderName={"Max"} />
        );

        expect(wrapper.contains(message.content)).to.equal(true);
        expect(wrapper.contains(convertDateFromISOStringToReadableString(message.timestamp))).to.equal(true);
    })

    it('should renders a message unreadable block', () => {
        const wrapper = shallow(
            <Message />
        );

        expect(wrapper.find('.message-unreadable')).to.have.length(1);
    })
})