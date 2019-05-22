import React from 'react';
import { Button } from '../../../lib';
import './button.example.scss';

export default () => {
  return (
    <div>
      <div className='f-btn-demo'>
        <h1>基本用法</h1>
        <Button className="f-btn" type="primary">Primary</Button>
        <Button className="f-btn" type="default">Default</Button>
        <Button className="f-btn" type="dashed">dashed</Button>
        <Button className="f-btn" type="danger">Danger</Button>
        <Button className="f-btn" type="link">Link</Button>
      </div>
      <div className='f-btn-demo'>
        <h1>带Icon</h1>
        <Button className="f-btn" type="primary" icon="search">Primary</Button>
        <Button className="f-btn" type="default" icon="setting">Default</Button>
        <Button className="f-btn" type="dashed" icon="filter">dashed</Button>
        <Button className="f-btn" type="danger" icon="close">Danger</Button>
        <Button className="f-btn" type="link" icon="alipay">Link</Button>
      </div>
    </div>
  )
}
