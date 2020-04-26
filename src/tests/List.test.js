import React from 'react';
import List from '../components/List';
import { shallow } from 'enzyme';

describe('components/List', () => {
  const component = shallow(<List />);
  test('Snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  test('should exist', () => {
    expect(component).not.toBeNull();
  });
})


