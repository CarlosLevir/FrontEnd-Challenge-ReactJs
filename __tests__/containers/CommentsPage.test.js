import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import CommentsPage from '../../src/containers/CommentsPage';

const mockStore = configureStore();

const initialState = {
  comments: [
    {
      name: 'Lorem Ipsum',
      email: 'lorem@ipsum',
      body: 'Lorem Ipsum'
    },
    {
      name: 'Lorem Ipsum',
      email: 'lorem@ipsum',
      body: 'Lorem Ipsum'
    }
  ]
};

const context = React.createContext(initialState);
const store = mockStore(context);

configure({ adapter: new Adapter() });

describe('CommentsPage', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CommentsPage />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
