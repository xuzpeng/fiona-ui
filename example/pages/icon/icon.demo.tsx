import React, { Fragment, useState } from 'react';
import IconExample from './icon.example';
import CodeEditor from '../../CodeEditor';
import ReactMarkdown from 'react-markdown';

export default () => {
  const [rawCode, setRawCode] = useState(require('!!raw-loader!./icon.example.tsx').default);
  return <Fragment>
    <IconExample />
    {/* <Button
      onClick={() => setY(y === 0 ? 1 : 0)}
      style={{ marginTop: 20 }}
    >代码展示</Button> */}
    <CodeEditor value={rawCode} setRawCode={setRawCode} />
    <ReactMarkdown source={require('!!raw-loader!./icon.md').default} className="md"/>
  </Fragment>
}
