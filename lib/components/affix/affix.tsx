import React, { ReactElement, useRef, useState, useEffect } from 'react';
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
      const scrollY = window.scrollY;
      if (!ref.current) return;
      if (ref.current.getClientRects()[0].top < props.offsetTop) {
        ref.current.style.position = 'fixed';
        ref.current.style.top = props.offsetTop + 'px';
      } 
      if (scrollY <= fixedOffsetTop) {
        ref.current.style.position = 'relative';
        ref.current.style.top = 'initial';
      }
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