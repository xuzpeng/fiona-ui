import React from 'react';
import FButton from '../../../lib/components/button/button';
import './button.example.scss';

export default () => {
  return (
    <div>
      <FButton className="f-btn" type="primary">Primary</FButton>
      <FButton className="f-btn" type="default">Default</FButton>
      <FButton className="f-btn" type="dashed">dashed</FButton>
      <FButton className="f-btn" type="danger">Danger</FButton>
    </div>
  )
}
