import React, { useState } from 'react';
import { Input } from '../../../lib';
import './input.example.scss';

export default () => {
  const [inputVal, setInputVal] = useState();
  return (
    <div>
      <div className="input-example-demo">
        <h1 className="input-example-h1">基本使用</h1>
        <Input
          placeholder="Basic usage"
          onChange={(e) => setInputVal(e.currentTarget.value)}
          value={inputVal}
        />
      </div>
      <div className="input-example-demo">
        <h1 className="input-example-h1">设置大小</h1>
        <Input
          placeholder="Basic usage"
          size="small"
          onChange={(e) => setInputVal(e.currentTarget.value)}
          value={inputVal}
        />
        <Input
          placeholder="Basic usage"
          onChange={(e) => setInputVal(e.currentTarget.value)}
          value={inputVal}
        />
        <Input
          placeholder="Basic usage"
          size="large"
          onChange={(e) => setInputVal(e.currentTarget.value)}
          value={inputVal}
        />
      </div>
    </div>
  )
}