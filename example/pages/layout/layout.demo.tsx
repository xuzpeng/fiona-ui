import React, { Fragment, useState } from 'react';
import RawCode from '../../rawCode';
import LayoutExample from './layout.example';
import { Button } from '../../../lib';

export default () => {
  const [y, setY] = useState(0);
  return <Fragment>
    <LayoutExample/>
    <Button 
      onClick={() => setY(y === 0 ? 1 : 0)} 
      style={{marginTop: 20}}
    >代码展示</Button>
    {
      //@ts-ignore
      <RawCode scaleY={y} code={require('!!raw-loader!./layout.example').default}></RawCode>
    }
  </Fragment>
}
