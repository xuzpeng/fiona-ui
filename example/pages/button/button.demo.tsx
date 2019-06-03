import React, { Fragment, useState } from 'react';
import ButtonExample from './button.example';
import CodeEditor from '../../CodeEditor';

const buttonStyle = {
  marginTop: 20, 
  width: 40, 
  height: 40,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0.3,
  cursor: 'pointer',
  backgroundColor: '#ccc',
  fontSize: 12
};

export default () => {
  const [y, setY] = useState(0);
  const [rawCode, setRawCode] = useState(require('!!raw-loader!./button.example.tsx').default);
  return <Fragment>
    <ButtonExample />
    {/* <Button
      onClick={() => setY(y === 0 ? 1 : 0)}
      style={{ marginTop: 20 }}
    >代码展示</Button> */}
    <span 
      onClick={() => setY(y === 0 ? 1 : 0)}
      style={buttonStyle}
    >&lt;&nbsp;&gt;</span>
    <CodeEditor scaleY={y} value={rawCode} setRawCode={setRawCode}/>
  </Fragment>
}
