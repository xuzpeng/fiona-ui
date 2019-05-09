import React from 'react';
import { Input } from '../../../lib';
import './form.scss';

export interface FormData {
  [K: string]: any;
}

interface IProps {
  formData: FormData,
  fields: Array<{ name: string, label: string, input: { type: string }, autoComplete: string }>;
  onChange: (newFormData: FormData) => void;
}

const Form: React.FC<IProps> = (props) => {
  return (
    <form>
      {
        props.fields.map(v => (
          <div key={v.name} className="f-input-item">
            <label className='f-input-label' htmlFor={v.name}>{v.label}</label>
            <Input 
              id={v.name}
              type={v.input.type} 
              value={props.formData[v.name]}
              onChange={(e) => props.onChange({
                [v.name]: e.target.value
              })}
              autoComplete={v.autoComplete}
            />
          </div>
        ))
      }
    </form>
  )
}

export default Form;