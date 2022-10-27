import React from 'react';
import Intro from '../src/screens/Intro';
import renderer from 'react-test-renderer';

it('function and state test', () => {
  let IntroData = renderer.create(<Intro />).getInstance();
  IntroData.change(2);
  expect(IntroData.state.data).toBe(20);
});
