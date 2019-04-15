import React, { useState } from 'react';
import Dialog from '../../../lib/components/dialog/dialog';

export default () => {
  const [x, setx] = useState(false);
  return (
    <div>
      <button onClick={() => setx(!x)}>click</button>
      <Dialog visible={x} position="center">
        <strong>dialog</strong>
      </Dialog>
    </div>
  )
}
