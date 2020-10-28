import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '..';

describe('<Header />', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
