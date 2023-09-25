import { takeEvery, fork, put, all, call } from "redux-saga/effects";

//Account Redux states
import { ACTIVATE_USER, REGISTER_USER, RESEND_ACTIVATION_CODE, SIGN_UP } from "./actionTypes";
import { registerUserSuccessful, registerUserFailed, registersignUser, signUpSuccess, signUpError, activateUserSuccess, activateUserError, redirectToRoute, resendActivationCodeSuccess, resendActivationCodeError } from "./actions";

//Include Both Helper File with needed methods
import { SignUpAPICALL, SignUpURL, activateUserURL, employerSignUpURL, resendActivationCode } from "../../../helpers/fakebackend_helper";
import {
  postFakeRegister,
  postJwtRegister,
} from "../../../helpers/fakebackend_helper";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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

function* signUpUser({ payload: data } ) {
  try {
    const response = yield call(SignUpURL, data);
    if (response?.data?.status === 1) {
      // console.log('register succesful')
      yield put(signUpSuccess(response?.data?.results));
    //  yield put(registersignUser(response?.data?.results));
     // history(`/login`)
     toast.success(`${response.data.message}`, {
      autoClose: 3000,
    });
     window.location.href ="/test-home"
  
    } else {
      yield put(signUpError(response?.data?.detail));
      toast.warn(`${response.data.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    yield put(signUpError(error.response.data));
    
    
  }
}

function* activateUser({ payload: data } ) {
  try {
    const response = yield call(activateUserURL, data);
    if (response?.data?.status === 1) {
      // console.log('register succesful')
      yield put(activateUserSuccess(response?.data?.results));
    //  yield put(registersignUser(response?.data?.results));
     // history(`/login`)
     yield put(redirectToRoute('/login'));
     toast.success(`${response.data.message}`, {
      autoClose: 3000,
    });
  
    } else {
      yield put(activateUserError(response?.data?.detail));
       toast.warn(`${response.data.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    yield put(activateUserError(error.response.data));
  }
}

function* resendCode({ payload: data } ) {
  try {
    const response = yield call(resendActivationCode, data);
    if (response?.data?.status === 1) {
      // console.log('register succesful')
      yield put(resendActivationCodeSuccess(response?.data?.results));
    //  yield put(registersignUser(response?.data?.results));
     // history(`/login`)
     //yield put(resendActivationCodeError('/login'));
     toast.success(`${response.data.message}`, {
      autoClose: 3000,
    });
  
    } else {
      yield put(resendActivationCodeError(response?.data?.detail));
      toast.warn(`${response.data.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    yield put(resendActivationCodeError(error.response.data));
  }
}



export function* watchUserRegister() {
  yield takeEvery(SIGN_UP, signUpUser);
  yield takeEvery(ACTIVATE_USER, activateUser);
  yield takeEvery(RESEND_ACTIVATION_CODE, resendCode);
}

function* accountSaga() {
  yield all([fork(watchUserRegister)]);
}

export default accountSaga;
