import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import RegistrationForm from './RegistrationForm';
import sinon from 'sinon';
const dispatch = sinon.spy();

describe('<RegistrationForm />', () => {
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
        <RegistrationForm />
      </Provider>
    );
  });

  it('Renders without crashing', () => {
    expect(wrapper).not.toBeNull();
  });
});
