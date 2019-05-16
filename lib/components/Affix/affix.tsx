import React, {useRef} from 'react';
import './affix.scss';

interface IProps {
  offsetTop?: number
}

const Affix: React.FC<IProps> = ({
  children, offsetTop
}) => {
  const affixTop = useRef(null);
  return (
    <div
      className='f-affix'
      ref={affixTop}
      style={{top: offsetTop}}
    >{children}</div>
  )
};

export default Affix;