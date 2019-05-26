import React, { Fragment, useState } from 'react';
import RawCode from '../../rawCode';
import DialogExample from './dialog.example';
import { Button } from '../../../lib';

export default () => {
  const [y, setY] = useState(0);
  return <Fragment>
    <DialogExample/>
    <Button 
      style={{marginTop: 40}}
      onClick={() => setY(y === 0 ? 1 : 0)} 
    >代码展示</Button>
    {
      <RawCode scaleY={y} code={require('!!raw-loader!./dialog.example').default}></RawCode>
    }
  </Fragment>
}
