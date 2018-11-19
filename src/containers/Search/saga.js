import { call, put, takeLatest, select } from 'redux-saga/effects';
import { SEARCH_VALUE_CHANGE, NODE_TITLE_SUCCEEDED, NODE_TITLE_FAILED, NODE_TITLE_CLEAR } from "./constants";
import axios from 'axios';
import SearchReducer from './reducer'

function* getNodeTitle(action) {
  // Show how to get the state in saga callback.
  const SearchReducer = state => state.SearchReducer
  const state = yield select(SearchReducer)
  //console.log(state)

  // Get the node ID from the action.
  const nodeID = action.payload

  if (!nodeID) {
    return yield put({
      type: NODE_TITLE_CLEAR
    })
  }

  let path = `node/${nodeID}`
  // If its not numeric.
  if (isNaN(nodeID)) {
    path = nodeID
  }

  try {
    const req = yield call(axios.get,
      `/${path}`, {
        params: {
          _format: 'json',
        },
      }
    );

    const node = req.data;
    const title = node.title[0].value;
    const sticky = node.sticky[0].value;
    let body = null;
    if (sticky) {
      body = node.body[0].value;
    }

    yield put({
      type: NODE_TITLE_SUCCEEDED,
      payload: {
        title,
        body,
      }
    })

  }
  catch (e) {
    yield put({
      type: NODE_TITLE_FAILED
    })
  }
}

export function* searchWatcher() {
  yield takeLatest('SEARCH_VALUE_CHANGE', getNodeTitle)
}