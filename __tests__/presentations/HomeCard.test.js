import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import HomePage from '../../src/presentations/HomeCard';

configure({ adapter: new Adapter() });

describe('HomePage', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HomePage />).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
