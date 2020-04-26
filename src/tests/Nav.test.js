import React from 'react';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav';

test('renders correctly', () => {
  const tree = renderer.create(<Nav />).toJSON();
  expect(tree).toMatchSnapshot();
});
