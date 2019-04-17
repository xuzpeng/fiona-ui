import React, { useState } from 'react';
import Dialog from '../../../lib/components/dialog/dialog';
import FButton from '../../../lib/components/button/button';
import { alert } from '../../../lib/components/dialog/dialog';

export default () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  return (
    <div>
      <div style={{position: "absolute"}}>
        <FButton onClick={() => setX(!x)}>打开dialog对话框1</FButton>
        <FButton onClick={() => setY(!y)} style={{marginLeft: 20}}>打开dialog对话框2</FButton>
        <FButton onClick={() => alert('hello world')} style={{marginLeft: 20}}>打开dialog对话框3</FButton>
        <Dialog
          onClose={() => setX(false)}
          visible={x}
          position="center"
          closeOnMask={false}
          buttons={
            [
              <FButton onClick={() => setX(false)}>取消</FButton>,
              <FButton type="primary" onClick={() => setX(false)}>确认</FButton>
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
      <div>
        <Dialog
          onClose={() => setY(false)}
          visible={y}
          position="center"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Dialog>
      </div>
    </div>
  )
}
