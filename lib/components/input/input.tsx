import React, { useState } from 'react';
import prefixClass from '../../helpers/prefixClass';
import combineClass from '../../helpers/combineClass';
import './input.scss';

const prefix = prefixClass('f-input');

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FunctionComponent<IProps> = ({
  className,
  value,
  onChange,
  ...restProps
}) => {
  const [inputVal, setInputVal] = useState(value);
  const isEmpty = (v: any) => {
     return v === (null || undefined) ? '' : v; 
  };
  return (
    <input
      className={combineClass(prefix(), className)}
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
