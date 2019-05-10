import React from 'react';
import { Input } from '../../../lib';
import './form.scss';
import { ReactNodeArray } from 'prop-types';

export interface FormData {
  [K: string]: any;
}

interface IProps {
  formData: FormData,
  fields: Array<{ name: string, label: string, input: { type: string }, autoComplete?: string }>;
  onChange: (newFormData: FormData, event?: React.ChangeEvent) => void;
  buttons: ReactNodeArray;
}

const Form: React.FC<IProps> = (props) => {
  return (
    <form className="f-form">
      {
        props.fields.map(v => (
          <div key={v.name} className="f-form-input-item">
            <label className='f-form-input-label' htmlFor={v.name}>{v.label}</label>
            <Input
              id={v.name}
              type={v.input.type}
              value={props.formData[v.name]}
              onChange={(e) => props.onChange({
                ...props.formData,
                [v.name]: e.target.value,
              })}
              autoComplete={v.autoComplete}
            />
          </div>
        ))
      }
      <div className="f-form-buttons">{props.buttons.map((button, index) => <span key={index}>{button}</span>)}</div>
    </form>
  )
}

export default Form;