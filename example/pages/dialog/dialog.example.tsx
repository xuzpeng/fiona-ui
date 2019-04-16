import React, { useState } from 'react';
import Dialog from '../../../lib/components/dialog/dialog';
import FButton from '../../../lib/components/button/button';

export default () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  return (
    <div>
      <div style={{position: "absolute"}}>
        <FButton onClick={() => setY(!y)}>打开dialog对话框2</FButton>
        <FButton onClick={() => setX(!x)} style={{marginLeft: 20}}>打开dialog对话框1</FButton>
        <Dialog
          onClose={() => setX(false)}
          visible={x}
          position="center"
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
          buttons={
            [
              <FButton onClick={() => setY(false)}>取消</FButton>,
              <FButton type="primary" onClick={() => setY(false)}>确认</FButton>
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
    </div>
  )
}
