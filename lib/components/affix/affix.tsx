import React, {ReactElement, useRef, useState, useEffect} from 'react';
import './affix.scss';

interface IProps {
  children: ReactElement;
  offsetTop: number;
}

const Affix: React.FC<IProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [fixedOffsetTop, setFixedOffsetTop] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const scrollWindow = () => {
      
    }
    setFixedOffsetTop(ref.current.offsetTop);
    window.addEventListener('scroll', scrollWindow);
    return () => {
      window.removeEventListener('scroll', scrollWindow);
    }
  }, [fixedOffsetTop]);
  return (
    <div className="f-affix" ref={ref}>{props.children}</div>
  )
}

export default Affix;