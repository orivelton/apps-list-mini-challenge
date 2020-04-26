import React from 'react';
import List from '../components/List';
import { shallow } from 'enzyme';

test('renders correctly', () => {
  const tree = shallow(<List />);
  expect(tree).toMatchSnapshot();
});
