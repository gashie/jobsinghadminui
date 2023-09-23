import { takeEvery, fork, put, all, call } from "redux-saga/effects";

//Account Redux states
import { REGISTER_USER } from "./actionTypes";
import { registerUserSuccessful, registerUserFailed, registersignUser } from "./actions";

//Include Both Helper File with needed methods
import { SignUpAPICALL, employerSignUpURL } from "../../../helpers/fakebackend_helper";
import {
  postFakeRegister,
  postJwtRegister,
} from "../../../helpers/fakebackend_helper";


// Is user register successfull then direct plot user in redux.
// function* registerUser({ payload: { user } }) {
//   try {
//     if (process.env.REACT_APP_API_URL) {
//       const response = yield call(postFakeRegister, user);
//       if (response.message === "success") {
//         yield put(registerUserSuccessful(response));
//       } else {
//         yield put(registerUserFailed(response));
//       }
//     }
//   } catch (error) {
//     yield put(registerUserFailed(error));
//   }
// }

function* signUpUser({ payload: { user, history } }) {
  try {
    const response = yield call(employerSignUpURL, user);
    if (response?.data?.status === 1) {
      // console.log('register succesful')
      yield put(registerUserSuccessful(response?.data?.results));
    //  yield put(registersignUser(response?.data?.results));
     // history(`/login`)
  
    } else {
      yield put(registerUserFailed(response?.data?.detail));
    }
  } catch (error) {
    yield put(registerUserFailed(error.response.data));
  }
}



export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, signUpUser);
}

function* accountSaga() {
  yield all([fork(watchUserRegister)]);
}

export default accountSaga;
