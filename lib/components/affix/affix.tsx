import React, {ReactElement, useRef, useEffect} from 'react';
import './affix.scss';

interface IProps {
  children: ReactElement;
  offsetTop: number;
}

const Affix: React.FC<IProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let top: number;
    if (ref.current) {
      top = ref.current.offsetTop;
    }
    const scrollWindow = () => {
      if (!ref.current) return;
      if (window.scrollY <= top && ref.current.style.position === 'fixed') {
        ref.current.style.position = 'relative';
        ref.current.style.top = 'initial';
      }
      if ((ref.current.getBoundingClientRect() as DOMRect).y <= props.offsetTop) {
        ref.current.style.position = 'fixed';
        ref.current.style.top = `${props.offsetTop}px`;
      }
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
