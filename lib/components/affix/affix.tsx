import React, {ReactElement, useRef, useEffect} from 'react';
import './affix.scss';

interface IProps {
  children: ReactElement;
  offsetTop: number;
}

const Affix: React.FC<IProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollWindow = () => {
      if (!ref.current) return;
    };
    window.addEventListener('scroll', scrollWindow);
    return () => {
      window.removeEventListener('scroll', scrollWindow);
    }
  }, []);
  return (
    <div className="f-affix" ref={ref}>{props.children}</div>
  )
}

export default Affix;
