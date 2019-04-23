import React from 'react';
import RawCode from '../../rawCode';

export default () => {
  return <RawCode code={require('!!raw-loader!./button.example.tsx').default}></RawCode>
}