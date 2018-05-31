import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoSection from './info-section';

describe ('<InfoSection />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoSection />);
    });
});