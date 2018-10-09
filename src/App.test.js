import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from './App';

describe('<App />', () => {
  it('should renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App')).to.have.length(1);
  })
})