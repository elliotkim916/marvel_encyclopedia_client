import React from 'react';
import { mount } from 'enzyme';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<LoginForm />);
  });

  it('Renders without crashing', () => {
    expect(wrapper).not.toBeNull();
  });
});
