import React, { useState } from 'react';
import Dialog from '../../../lib/components/dialog/dialog';
import FButton from '../../../lib/components/button/button';

export default () => {
  const [x, setx] = useState(false);
  return (
    <div>
      <button onClick={() => setx(!x)}>click</button>
      <Dialog 
        onClose={() => setx(false)}
        visible={x} 
        position="center"
        buttons={
          [
            <FButton onClick={() => setx(false)}>取消</FButton>,
            <FButton type="primary" onClick={() => setx(false)}>确认</FButton>
          ]
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Dialog>
    </div>
  )
}
