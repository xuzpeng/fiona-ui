import React from 'react';
import Button from '../button';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Button Component', () => {
  it('renders button component', () => {
    const component = renderer.create(<Button>Primary</Button>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('button component click events', () => {
    const component = renderer.create(<Button onClick={() => {}}>Primary</Button>);
    const json = component.toJSON();
    json && json.props.onClick();
  });
  it('button component text', () => {
    const button = shallow(<Button>Primary</Button>);
    expect(button.text()).toEqual('Primary');
  });
});