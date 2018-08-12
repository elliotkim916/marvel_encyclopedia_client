import React from 'react';
import {shallow} from 'enzyme';

import {Comic} from './comic';

describe('<Comic />', () => {
  it('Renders without crashing', () => {
    shallow(<Comic />);
  });
});