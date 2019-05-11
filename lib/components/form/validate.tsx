import { FormData } from './form';

interface Rules {
  [K: number]: { name: string, minLen?: number, maxLen?: number }
}

export const ValidateFields = (formData: FormData, rules: Rules) => {
  
}