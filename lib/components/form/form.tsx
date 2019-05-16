import React, { ReactElement } from 'react';
import { Input } from '../../../lib';
import './form.scss';
import prefixClass from '../../helpers/prefixClass';
import { Errors } from './validator';
import combineClass from "../../helpers/combineClass";
import PropTypes from 'prop-types';

const prefix = prefixClass('f-form');

export interface FormData {
  [K: string]: any;
}

interface IProps {
  formData: FormData,
  fields: Array<{ name: string, label: string, input: { type: string }, autoComplete?: boolean }>;
  onChange: (newFormData: FormData, event?: React.ChangeEvent) => void;
  buttons?: ReactElement[];
  labelWidth?: number;
  errors?: Errors;
  layout?: string;
}

const Form: React.FC<IProps> = (props) => {
  return (
    <form className={prefix()}>
      {
        props.fields.map(v => (
          <div key={v.name}>
            <div className={combineClass(prefix('input-item'), prefix(`input-item-${props.layout}`))}>
              <label
                className={prefix('input-label')}
                htmlFor={v.name}
                style={{ width: props.labelWidth }}
              >{v.label}</label>
              <Input
                id={v.name}
                type={v.input.type}
                value={props.formData[v.name]}
                onChange={(e) => props.onChange({
                  ...props.formData,
                  [v.name]: e.target.value,
                })}
                autoComplete={v.autoComplete ? '' : 'new-password'}
              />
            </div>
            {
              props.errors && props.errors[v.name] && props.errors[v.name].length ? 
                <div className={prefix('error-txt')}>{props.errors[v.name].join(' ')}</div> : 
                null
            }
          </div>
        ))
      }
      {/* 按钮部分 */}
      {
        props.buttons && props.buttons.length ? <div className={prefix('buttons')}>
          {
            props.buttons.map((btn, index) => {
              return React.cloneElement(btn, {
                key: index
              })
            })
          }
        </div> : null
      }
    </form>
  )
}

Form.propTypes = {
  layout: PropTypes.string
}

Form.defaultProps = {
  layout: 'horizontal'
}

export default Form;