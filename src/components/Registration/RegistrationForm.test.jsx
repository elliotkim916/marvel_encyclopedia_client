import React from 'react';
import { shallow, mount } from 'enzyme';

import RegistrationForm from './RegistrationForm';

describe('<RegistrationForm />', () => {
  it('Renders without crashing', () => {
    shallow(<RegistrationForm />);
  });
});
