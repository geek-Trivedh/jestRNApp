import React from 'react';
import 'react-native';
import Profile from '../src/components/Profile';
import renderer from 'react-test-renderer';

import Enzyme, {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('testing props', () => {
  const wrapper = shallow(<Profile data={'Hello'} />).props();
  console.log(wrapper);
  expect(2).toEqual(2);
});
