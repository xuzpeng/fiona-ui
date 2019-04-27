import React, { useState } from 'react';
import { Input } from '../../../lib'; 

export default () => {
  const [inputVal, setInputVal] = useState();
  return (
    <div>
      <Input
        placeholder="Basic usage" 
        onChange={(e) => setInputVal(e.currentTarget.value)} 
        value={inputVal}
      />
    </div>
  )
}