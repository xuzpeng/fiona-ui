import React, { Fragment, useState } from 'react';
import ButtonExample from './button.example';
import CodeEditor from '../../CodeEditor';
import ReactMarkdown from 'react-markdown';

export default () => {
  const [rawCode, setRawCode] = useState(require('!!raw-loader!./button.example.tsx').default);
  return <Fragment>
    <ButtonExample />
    {/* <Button
      onClick={() => setY(y === 0 ? 1 : 0)}
      style={{ marginTop: 20 }}
    >代码展示</Button> */}
    <CodeEditor value={rawCode} setRawCode={setRawCode}/>
    <ReactMarkdown source={require('!!raw-loader!./button.md').default} className="md"/>
  </Fragment>
}
