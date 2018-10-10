import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import MessageInput from './MessageInput';
import { Control, LocalForm } from 'react-redux-form';

describe('<MessageInput />', () => {
    it('should match its reference snapshot', () => {
        const wrapper = shallow(
            <MessageInput />
        );

        expect(wrapper).to.matchSnapshot()
    })

    it('should trigger its `addMessage` prop', () => {
        const message = "testing message";
        const addMessage = sinon.spy()
        const wrapper = mount(
            <MessageInput 
                addMessage={addMessage}
                currentUserId={1}/>
        )
        wrapper.find(Control.textarea).simulate('change', {target: {value: message}});
        wrapper.find(LocalForm).simulate('submit');
        expect(addMessage).to.have.been.calledWith(message, 1);
      })
})