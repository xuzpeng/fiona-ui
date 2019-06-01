import React, {useState} from 'react';
import {Affix, Button} from '../../../lib';
import './affix.example.scss';

export default () => {
  const [top] = useState(10)
  return (
    <div className="f-demo-affix">
      <div>
        敬请期待
      </div>
    </div>
  )
}