import React from 'react';
import {shallow} from 'enzyme';

import Input from './input';

describe('<Input />', () => {
    it ('Renders without crashing', () => {
        const props = {
            meta: {
                active: false,
                touched: false,
                error: false,
                warning: false
            },
            input: {
                name: 'name'
            },
            type: 'type',
            label: 'label'
        }

        shallow(<Input {...props} />)
    });
});