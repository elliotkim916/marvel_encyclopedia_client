import React from 'react';
import { mount } from 'enzyme';
import RegistrationForm from './RegistrationForm';

describe('<RegistrationForm />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<RegistrationForm />);
  });

  it('Renders without crashing', () => {
    expect(wrapper).not.toBeNull();
  });
});
