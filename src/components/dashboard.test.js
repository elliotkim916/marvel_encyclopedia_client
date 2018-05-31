import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {Provider} from 'react-redux';
import {Dashboard} from './dashboard';
import sinon from 'sinon';

describe('<Dashboard />', () => {
    const dashboardStore = {
        "match": {
          "path": "/dashboard",
          "url": "/dashboard",
          "isExact": true,
          "params": {}
        },
        "location": {
          "pathname": "/dashboard",
          "search": "",
          "hash": ""
        },
        "history": {
          "length": 25,
          "action": "POP",
          "location": {
            "pathname": "/dashboard",
            "search": "",
            "hash": ""
          }
        },
        "username": "demouser",
        "protectedData": ""
      }
      
      it('Renders without crashing', () => {
        const wrapper = shallow(
            <Provider store={dashboardStore}>
                <Dashboard />
            </Provider>
        );
    });
});