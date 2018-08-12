import React from 'react';
import {mount} from 'enzyme';

import {SearchForm} from './search-form';

describe('<SearchForm />', () => {
  it('Renders without crashing', () => {    
    mount(<SearchForm />);
  });
});