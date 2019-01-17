import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SuccessModal from '../../src/components/SuccessModal';

configure({ adapter: new Adapter() });

describe('SuccessModal', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SuccessModal />);
    expect(wrapper).toMatchSnapshot();
  });
});
