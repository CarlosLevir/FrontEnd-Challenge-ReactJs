import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import HomeCard from '../../src/presentations/HomeCard';

const post = {
  id: 1,
  userId: 1,
  title: 'test',
  body: 'test'
};

configure({ adapter: new Adapter() });

describe('HomeCard', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HomeCard post={post} />);
    expect(wrapper).toMatchSnapshot();
  });
});
