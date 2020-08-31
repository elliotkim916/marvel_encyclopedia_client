import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';
import { Provider } from 'react-redux';
import sinon from 'sinon';
const dispatch = sinon.spy();

describe('<Dashboard />', () => {
  const dashboardStore = {
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
      <Provider store={dashboardStore}>
        <Dashboard />
      </Provider>
    );
  });
});
