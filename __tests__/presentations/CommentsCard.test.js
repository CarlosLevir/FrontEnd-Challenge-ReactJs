import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CommentsCard from '../../src/presentations/CommentsCard';

const comment = {
  name: 'test',
  email: 'test@test',
  title: 'test',
  body: 'test'
};

configure({ adapter: new Adapter() });

describe('CommentsCard', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CommentsCard comment={comment} />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
