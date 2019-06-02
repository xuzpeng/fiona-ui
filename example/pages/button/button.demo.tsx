import React, { Fragment, useState } from 'react';
import ButtonExample from './button.example';
import { Button } from '../../../lib';
import CodeEditor from '../../CodeEditor';

export default () => {
  const [y, setY] = useState(0);
  const [rawCode, setRawCode] = useState(require('!!raw-loader!./button.example.tsx').default);
  return <Fragment>
    <ButtonExample />
    <Button
      onClick={() => setY(y === 0 ? 1 : 0)}
      style={{ marginTop: 20 }}
    >代码展示</Button>
    <CodeEditor scaleY={y} value={rawCode} setRawCode={setRawCode}/>
  </Fragment>
}
