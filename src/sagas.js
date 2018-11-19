import { all } from 'redux-saga/effects';
import { searchWatcher } from './containers/Search/saga'

export default function* rootSaga() {
  yield all([
    searchWatcher(),
  ]);
}