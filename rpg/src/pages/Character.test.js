import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Character from './Character';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe('Character component testing', function () {
  it('renders when loaded', function () {
    const wrapper = shallow(<Character />);
    const header = <h1>Character</h1>;
    expect(wrapper.contains(header)).to.equal(true);
  });
});

/*
-renders page when loaded
*/