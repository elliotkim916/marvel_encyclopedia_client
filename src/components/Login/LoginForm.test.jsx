import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import LoginForm from './LoginForm';
import sinon from 'sinon';
const dispatch = sinon.spy();

describe('<LoginForm />', () => {
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

  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore}>
        <LoginForm />
      </Provider>
    );
  });

  it('Renders without crashing', () => {
    expect(wrapper).not.toBeNull();
  });
});
