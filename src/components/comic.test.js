import React from 'react';
import {shallow, mount} from 'enzyme';

import {Comic} from './comic';

describe('<Comic />', () => {
    it('Renders without crashing', () => {
        shallow(<Comic />);
    });
});