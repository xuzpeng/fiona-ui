import React, { useState } from 'react';
import prefixClass from '../../helpers/prefixClass';
import combineClass from '../../helpers/combineClass';
import './input.scss';

const prefix = prefixClass('f-input');

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const tuple = <T extends string[]>(...args: T) => args;
const InputSizes = tuple('small', 'default', 'large');

interface IProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: (typeof InputSizes)[number];
}

const Input: React.FunctionComponent<IProps> = ({
  className,
  value,
  onChange,
  size,
  ...restProps
}) => {
  const [inputVal, setInputVal] = useState(value);
  const isEmpty = (v: any) => {
     return v === (null || undefined) ? '' : v; 
  };
  return (
    <input
      className={combineClass(prefix(), className, prefix(size))}
      value={onChange ? isEmpty(value) : inputVal}
      onChange={(e) => {
        onChange ?
          onChange(e) :
          setInputVal(e.currentTarget.value)
      }}
      {...restProps}
    />
  )
}

export default Input;
