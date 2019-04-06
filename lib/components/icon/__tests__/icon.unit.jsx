import * as renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../icon';
import { mount } from 'enzyme';

describe('<Icon />', () => {
  it('renders icon component', () => {
    const json = renderer.create(<Icon/>).toJSON();
    expect(json).toMatchSnapshot();
  });
  it('icon component click events', () => {
    const fn = jest.fn();
    const component = mount(<Icon name="qq" onClick={fn}/>);
    component.find('svg').simulate('click');
  })
});
