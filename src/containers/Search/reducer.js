import { SEARCH_VALUE_CHANGE, NODE_TITLE_SUCCEEDED, NODE_TITLE_FAILED, NODE_TITLE_CLEAR } from './constants';

const initialState = {
  'search': "",
  'nodeTitle': "",
  'body': null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_VALUE_CHANGE: {
      const {payload} = action;
      return {
        ...state,
        search: payload,
      }
    }
    case NODE_TITLE_SUCCEEDED: {
      const {payload} = action;
      return {
        ...state,
        nodeTitle: payload.title,
        body: payload.body,
      }
    }
    case NODE_TITLE_FAILED: {
      return {
        ...state,
        nodeTitle: "No results found",
        body: null,
      }
    }
    case NODE_TITLE_CLEAR: {
      return {
        ...state,
        nodeTitle: "",
        body: null,
      }
    }
    default:
      return state;
  }
}
