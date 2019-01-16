import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ContactPage from '../../src/containers/ContactPage';

configure({ adapter: new Adapter() });

describe('ContactPage', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ContactPage />).shallow();
    expect(wrapper).toMatchSnapshot();
  });
});
