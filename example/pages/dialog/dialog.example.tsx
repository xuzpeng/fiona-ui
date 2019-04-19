import React, { useState } from 'react';
import { 
  Dialog, 
  alert, 
  confirm, 
  modal, 
  Button 
} from '../../../lib';

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
        <Button onClick={() => setX(!x)}>打开dialog对话框1</Button>
        <Button onClick={() => setY(!y)} style={{marginLeft: 20}}>打开dialog对话框2</Button>
        <Button type="primary" onClick={() => alert('hello world')} style={{marginLeft: 20}}>alert</Button>
        <Button type="primary" onClick={() => confirm('Are you sure?', () => console.log('执行成功!'))} style={{marginLeft: 20}}>confirm</Button>
        <Button type="primary" onClick={() => modal('hello world')} style={{marginLeft: 20}}>modal string</Button>
        <Button type="primary" onClick={() => openModal()} style={{marginLeft: 20}}>modal jsx</Button>
        <Dialog
          onClose={() => setX(false)}
          visible={x}
          position="center"
          closeOnMask={false}
          buttons={
            [
              <Button onClick={() => setX(false)}>取消</Button>,
              <Button type="primary" onClick={() => setX(false)}>确认</Button>
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
