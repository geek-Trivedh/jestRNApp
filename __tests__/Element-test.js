import React from 'react';
import renderer from 'react-test-renderer';
import Element from '../src/screens/Element';

let findElement = function (tree, element) {
  let result;
  for (let node in tree.children) {
    if (tree.children[node].props.testID === element) {
      result = true;
    }
  }
  return result;
};

it('find element', () => {
  let tree = renderer.create(<Element />).toJSON();
  expect(findElement(tree, 'password')).toBeDefined();
});
