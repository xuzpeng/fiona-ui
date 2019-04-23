import React from 'react';
import { Button } from '../../../lib';
import './button.example.scss';

export default () => {
  return (
    <div>
      <Button className="f-btn" type="primary">Primary</Button>
      <Button className="f-btn" type="default">Default</Button>
      <Button className="f-btn" type="dashed">dashed</Button>
      <Button className="f-btn" type="danger">Danger</Button>
    </div>
  )
}
