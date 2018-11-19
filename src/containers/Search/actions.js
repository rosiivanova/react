import { SEARCH_VALUE_CHANGE } from './constants';

export const searchValueChange = (value) => ({
  type: SEARCH_VALUE_CHANGE,
  payload: value
});