import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from '../components/ListItem';

test('renders correctly', () => {
  const tree = renderer.create(<ListItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
