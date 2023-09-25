import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { resetCodeURL } from "../../../helpers/fakebackend_helper";






function* forgetUser({ payload: data }) {
  try {
    const response = yield call (resetCodeURL, data)
    if(response && response.data.status === 1){
        // yield put resetPass
    }
  } catch (error) {
     console.log(error)
  }
}

export function* watchUserPasswordForget() {
  // yield takeEvery(FORGET_PASSWORD, forgetUser);
}

function* forgetPasswordSaga() {
  yield all([fork(watchUserPasswordForget)]);
}

export default forgetPasswordSaga;
