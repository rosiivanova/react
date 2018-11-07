import { FIELD_VALUE_CHANGE, SUBMIT_FORM } from './constants';

const initialState = {
  'results': false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FIELD_VALUE_CHANGE: {
      const {payload} = action;
      console.log(payload);
      return {
        ...state,
        [payload.name]: payload.value,
      }
    }
    case SUBMIT_FORM: {
      return {
        ...state,
        results: action.payload
      }
    }
    default:
      return state;
  }
}
