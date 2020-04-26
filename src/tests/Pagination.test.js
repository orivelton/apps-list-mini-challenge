import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '../components/Pagination';

test('renders correctly', () => {
  const tree = renderer.create(<Pagination />).toJSON();
  expect(tree).toMatchSnapshot();
});
