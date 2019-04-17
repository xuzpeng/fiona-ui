import React, { useState } from 'react';
import Dialog from '../../../lib/components/dialog/dialog';
import FButton from '../../../lib/components/button/button';
import { alert, confirm, modal } from '../../../lib/components/dialog/dialog';

export default () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const openModal = () => {
    const closeModal = modal(
      <h1>
        Close Me 
        <button onClick={() => closeModal()}>
          close
        </button>
      </h1>
    )
  }
  return (
    <div>
      <div style={{position: "absolute"}}>
        <FButton onClick={() => setX(!x)}>打开dialog对话框1</FButton>
        <FButton onClick={() => setY(!y)} style={{marginLeft: 20}}>打开dialog对话框2</FButton>
        <FButton type="primary" onClick={() => alert('hello world')} style={{marginLeft: 20}}>alert</FButton>
        <FButton type="primary" onClick={() => confirm('Are you sure?', () => console.log('执行成功!'))} style={{marginLeft: 20}}>confirm</FButton>
        <FButton type="primary" onClick={() => modal('hello world')} style={{marginLeft: 20}}>modal string</FButton>
        <FButton type="primary" onClick={() => openModal()} style={{marginLeft: 20}}>modal jsx</FButton>
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
