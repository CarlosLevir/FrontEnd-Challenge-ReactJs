import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import HomePage from '../../src/containers/HomePage';

configure({ adapter: new Adapter() });

describe('HomePage', () => {
  it('renders correctly', async () => {
    const wrapper = await shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
