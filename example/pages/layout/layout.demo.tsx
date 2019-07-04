import React, { Fragment, useState } from 'react';
import LayoutExample from './layout.example';
import CodeEditor from '../../CodeEditor';
import ReactMarkdown from "react-markdown";

const editorStyle = {
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
  const [y, setY] = useState(1);
  const [rawCode, setRawCode] = useState(require('!!raw-loader!./layout.example.tsx').default);
  return <Fragment>
    <LayoutExample />
    {/* <Button
      onClick={() => setY(y === 0 ? 1 : 0)}
      style={{ marginTop: 20 }}
    >代码展示</Button> */}
    <span 
      onClick={() => setY(y === 0 ? 1 : 0)}
      style={editorStyle}
    >&lt;&nbsp;&gt;</span>
    <CodeEditor scaleY={y} value={rawCode} setRawCode={setRawCode}/>
    <ReactMarkdown source={require('!!raw-loader!./layout.md').default} className="md"/>
  </Fragment>
}
