import { FIELD_VALUE_CHANGE, SUBMIT_FORM } from './constants';

export const fieldValueChange = (name, value) => ({
  type: FIELD_VALUE_CHANGE,
  payload: {
    name,
    value,
  }
});

export const submitForm = () => ({
  type: SUBMIT_FORM,
  payload: true
});
