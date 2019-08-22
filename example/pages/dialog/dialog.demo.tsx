import React, { Fragment, useState } from 'react';
import DialogExample from './dialog.example';
import CodeEditor from '../../CodeEditor';

export default () => {
  const [rawCode, setRawCode] = useState(require('!!raw-loader!./dialog.example.tsx').default);
  return <Fragment>
    <DialogExample />
    {/* <Button
      onClick={() => setY(y === 0 ? 1 : 0)}
      style={{ marginTop: 20 }}
    >代码展示</Button> */}
    <CodeEditor value={rawCode} setRawCode={setRawCode}/>
  </Fragment>
}
