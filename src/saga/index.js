import { all, call } from "redux-saga/effects";

import postSaga from "saga/postSaga";
import postDetailSaga from "saga/postDetailSaga";
import userSaga from "saga/userSaga";

export default function* () {
  yield all([call(postSaga), call(postDetailSaga), call(userSaga)]);
}
