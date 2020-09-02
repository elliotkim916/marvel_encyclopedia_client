import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import LoginPage from './LoginPage';
import sinon from 'sinon';
const dispatch = sinon.spy();

describe(<LoginPage />, () => {
  const mockStore = {
    match: {
      path: '/Dashboard',
      url: '/Dashboard',
      isExact: true,
      params: {},
    },
    location: {
      pathname: '/Dashboard',
      search: '',
      hash: '',
    },
    history: {
      length: 25,
      action: 'POP',
      location: {
        pathname: '/Dashboard',
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
    shallow(
      <Provider store={mockStore}>
        <LoginPage />
      </Provider>
    );
  });
});
