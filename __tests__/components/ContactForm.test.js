import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ContactForm from '../../src/components/ContactForm';

configure({ adapter: new Adapter() });

describe('ContactForm', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ContactForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
