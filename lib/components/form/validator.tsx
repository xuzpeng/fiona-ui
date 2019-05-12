import {FormData} from './form';
import {isEmpty} from "../../helpers/utils";

type Rules = Array<{
  name: string,
  isRequired?: boolean,
  minLen?: number,
  maxLen?: number,
  message: string,
  pattern?: RegExp
}>;

export interface Errors {
  [K: string]: string[]
}

const addError = (rule: string[], message: string): void => {
  rule.push(message);
};

export const ValidateFields = (formData: FormData, rules: Rules): Errors => {
  const errors: Errors = {};
  rules.map(r => {
    const value = formData[r.name];
    if (isEmpty(errors[r.name])) {
      errors[r.name] = [];
    }
    if (
      (isEmpty(value) && r.isRequired) ||
      (r.minLen && value.length < r.minLen) ||
      (r.maxLen && value.length > r.maxLen) ||
      (r.pattern && !r.pattern.test(value))
    ) {
      addError(errors[r.name], r.message);
    }
  });
  return errors;
};