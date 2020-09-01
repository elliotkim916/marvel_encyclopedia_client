import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import sinon from 'sinon';
import Search from './Search';

const dispatch = sinon.spy();

describe('<Search />', () => {
  const mockStore = {
    match: {
      path: '/Search',
      url: '/Search',
      isExact: true,
      params: {},
    },
    location: {
      pathname: '/Search',
      search: '',
      hash: '',
    },
    history: {
      length: 25,
      action: 'POP',
      location: {
        pathname: '/Search',
        search: '',
        hash: '',
      },
    },
    username: 'demouser',
    protectedData: '',
    subscribe: () => {},
    dispatch,
    getState: () => {},
  };

  it('Renders without crashing', () => {
    mount(
      <Provider store={mockStore}>
        <Search />
      </Provider>
    );
  });
});
