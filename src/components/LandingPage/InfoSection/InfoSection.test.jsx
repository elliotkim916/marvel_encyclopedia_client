import React from 'react';
import { shallow } from 'enzyme';

import InfoSection from './InfoSection';

describe('<InfoSection />', () => {
  it('Renders without crashing', () => {
    shallow(<InfoSection />);
  });
});
