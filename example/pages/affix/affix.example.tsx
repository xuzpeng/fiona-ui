import React, {useState} from 'react';
import {Affix, Button} from '../../../lib';
import './affix.example.scss';

export default () => {
  const [top] = useState(10)
  return (
    <div className="f-demo-affix">
      <div>
        <h1>第一个例子</h1>
        <Affix offsetTop={top}>
          <Button
            type="primary"
          >
            Affix top
          </Button>
        </Affix>
      </div>
    </div>
  )
}