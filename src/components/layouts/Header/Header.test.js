import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './index';

describe('Header', () => {
  it('should render correctly', () => {
    const component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });
});
