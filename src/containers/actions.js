import { FIELD_VALUE_CHANGE, SUBMIT_FORM } from './constants';

export const fieldValueChange = e => ({
  type: FIELD_VALUE_CHANGE,
  payload: {
    name: e.target.name,
    value: e.target.value,
  }
});

export const checkboxValueChange = e => ({
  type: FIELD_VALUE_CHANGE,
  payload: {
    name: e.target.name,
    value: e.target.checked,
  }
});

export const submitForm = e => ({
  type: SUBMIT_FORM,
  payload: true
});
