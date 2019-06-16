import React, { useState } from 'react';
import { Input } from '../../../lib';
import './input.example.scss';

export default () => {
  const [inputVal1, setInputVal1] = useState();
  const [inputVal2, setInputVal2] = useState();
  const [inputVal3, setInputVal3] = useState();
  const [inputVal4, setInputVal4] = useState();
  return (
    <div>
      <div className="input-example-demo">
        <h1 className="input-example-h1">基本使用</h1>
        <Input
          placeholder="Basic usage"
          onChange={(e) => setInputVal1(e.currentTarget.value)}
          value={inputVal1}
        />
      </div>
      <div className="input-example-demo">
        <h1 className="input-example-h1">设置大小</h1>
        <Input
          placeholder="Basic usage"
          size="small"
          onChange={(e) => setInputVal2(e.currentTarget.value)}
          value={inputVal2}
        />
        <Input
          placeholder="Basic usage"
          onChange={(e) => setInputVal3(e.currentTarget.value)}
          value={inputVal3}
        />
        <Input
          size="large"
          placeholder="Basic usage"
          onChange={(e) => setInputVal4(e.currentTarget.value)}
          value={inputVal4}
        />
      </div>
    </div>
  )
}