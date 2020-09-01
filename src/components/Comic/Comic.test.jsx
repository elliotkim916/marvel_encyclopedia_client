import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Comic from './Comic';
import sinon from 'sinon';
const dispatch = sinon.spy();

describe('<Comic />', () => {
  const mockStore = {
    match: {
      path: '/Comic',
      url: '/Comic',
      isExact: true,
      params: {},
    },
    location: {
      pathname: '/Comic',
      search: '',
      hash: '',
    },
    history: {
      length: 25,
      action: 'POP',
      location: {
        pathname: '/Comic',
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
        <Comic />
      </Provider>
    );
  });
});
