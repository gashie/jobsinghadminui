import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import {
  LOGIN_USER,
  LOGOUT_USER,
  SOCIAL_LOGIN,
  TEST_VERIFY,
  UPDATE_PROFILE,
  LOGOUT,
  CHANGE_PASSWORD,
  RESET_PASSWORD_CODE,
} from "./actionTypes";
import {
  apiError,
  changePasswordError,
  changePasswordSuccess,
  getMe,
  getMeError,
  getMeSuccess,
  loginSuccess,
  logoutError,
  logoutSuccess,
  logoutUserSuccess,
  resetPasswordCode,
  resetPasswordCodeError,
  resetPasswordCodeSuccess,
  testVerifySuccess,
  updateProfileError,
  updateProfileSuccess,
} from "./actions";

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  changePasswordURL,
  loginURL,
  logoutURL,
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
  resetCodeURL,
  testLoginURL,
  testVerifyURL,
  updateProfileURL,
  verifyTokenURL,
} from "../../../helpers/fakebackend_helper";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Nav = (location) => {
  let navigate = useNavigate();
  navigate(`${location}`);
};

// function* loginUser({ payload: { user, history } }) {
//   try {
//     if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
//       const fireBaseBackend = getFirebaseBackend();
//       const response = yield call(
//         fireBaseBackend.loginUser,
//         user.email,
//         user.password
//       );
//       if (response) {
//         yield put(loginSuccess(response));
//         history('/dashboard')
//       } else {
//         yield put(apiError(response));
//       }
//     } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
//       const response = yield call(postJwtLogin, {
//         email: user.email,
//         password: user.password,
//       });
//       sessionStorage.setItem("authUser", JSON.stringify(response));
//       if (response) {
//         yield put(loginSuccess(response));
//         history('/dashboard')
//       } else {
//         yield put(apiError(response));
//       }
//     } else if (process.env.REACT_APP_API_URL) {
//       const response = yield call(postFakeLogin, {
//         email: user.email,
//         password: user.password,
//       });
//       if (response.status === "success") {
//         yield put(loginSuccess(response));
//         history('/dashboard')
//         sessionStorage.setItem("authUser", JSON.stringify(response));
//       } else {
//         yield put(apiError(response));
//       }
//     }
//   } catch (error) {
//     yield put(apiError(error));
//   }
// }

// function* logoutUser() {
//   try {
//     sessionStorage.removeItem("authUser");
//     if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
//       const fireBaseBackend = getFirebaseBackend();
//       const response = yield call(fireBaseBackend.logout);
//       yield put(logoutUserSuccess(LOGOUT_USER, response));
//     } else {
//       yield put(logoutUserSuccess(LOGOUT_USER, true));
//     }
//   } catch (error) {
//     yield put(apiError(LOGOUT_USER, error));
//   }
// }

// function* socialLogin({ payload: { data, history, type } }) {
//   try {
//     if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
//       const fireBaseBackend = getFirebaseBackend();
//       const response = yield call(fireBaseBackend.socialLoginUser, type);
//       if (response) {
//         history("/dashboard");
//       } else {
//         history("/login");
//       }
//       sessionStorage.setItem("authUser", JSON.stringify(response));
//       yield put(loginSuccess(response));
//     } else {
//       const response = yield call(postSocialLogin, data);
//       sessionStorage.setItem("authUser", JSON.stringify(response));
//       yield put(loginSuccess(response));
//     }
//     history('/dashboard');
//   } catch (error) {
//     yield put(apiError(error));
//   }
// }

function* testLoginUser({ payload: user }) {
  try {
    const response = yield call(testLoginURL, user);
    yield put(loginSuccess(response));
    const navigate = useNavigate;
    //  if(response.role === "seeker"){
    //   window.location.href="/job-seeker-admin"
    //  }
    if (response.role === "seeker") {
      alert("Logged in");
      loginSuccess(response);
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      navigate("/test-home");
    } else {
      alert("Error");
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function* testVerifyUser() {
  try {
    const response = yield call(testVerifyURL);

    console.log(response);
    if (response.Status === "Success") {
      yield put(testVerifySuccess(response));
    }
  } catch (error) {
    console.log(error);
  }
}

//official
function* loginUser({ payload: user }) {
  try {
    const response = yield call(loginURL, user);
    if (response && response?.status === 200 && response?.data?.status === 1) {
      try {
        const verifyToken = yield call(verifyTokenURL);
        if (
          verifyToken &&
          verifyToken?.status === 200 &&
          verifyToken?.data?.status === 1
        ) {
          yield put(getMeSuccess(verifyToken?.data?.data));
          yield put(loginSuccess(verifyToken?.data?.data));
          yield put(getMe());
          // window.location.href = "/job-seeker-admin"
          // if(verifyToken?.data?.data?.userInfo?.roleid === 2){
          //   window.location.href = '/job-seeker-dashboard'
          // }else{
          //   console.log('working')
          // }
          toast.success(`${response.data.message}`, {
            autoClose: 3000,
          });
        } else {
          yield put(getMeError(verifyToken?.data?.data));
          toast.warn(`${response?.data?.message}`, {
            autoClose: 3000,
          });
        }
      } catch (error) {
        console.log(error);
        toast.warn(`${response?.data?.message}`, {
          autoClose: 3000,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function* updateProfile({ payload: data }) {
  try {
    const response = yield call(updateProfileURL, data);

    if (response && response?.data?.status === 1) {
      yield put(updateProfileSuccess());
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(updateProfileError(response));
      toast.warn(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(updateProfileError(error));
  }
}
function* resetPCode({ payload: data } ) {
  try {
    const response = yield call(resetCodeURL, data);
    if (response?.data?.status === 1) {
      // console.log('register succesful')
      yield put(resetPasswordCodeSuccess(response?.data?.results));
    //  yield put(registersignUser(response?.data?.results));
     // history(`/login`)
     toast.success(`${response.data.message}`, {
      autoClose: 3000,
    });
     window.location.href ="/test-home"
  
    } else {
      yield put(resetPasswordCodeError(response?.data?.detail));
      toast.warn(`${response.data.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    yield put(resetPasswordCodeError(error.response.data));
    
    
  }
}
function* changePassword({ payload: data }) {
  try {
    const response = yield call(changePasswordURL, data);

    if (response && response?.data?.status === 1) {
      yield put(changePasswordSuccess());
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(changePasswordError(response));
      toast.warn(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(changePasswordError(error));
  }
}

function* logout() {
  try {
    const response = yield call(logoutURL);
    console.log(response)
    if ( response?.status === 200) {
      yield put(logoutSuccess(response.data.Message));
      toast.success(`${response?.data?.Message}`, {
        autoClose: 3000,
      });
      window.location.href ="/login"
    } else {
      yield put(logoutError(response.data.Message));
      toast.error(`${response?.data?.Message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(logoutError(error));
    toast.success(`${error}`, {
      autoClose: 3000,
    });
  }
}

function* authSaga() {
  yield takeEvery(CHANGE_PASSWORD, changePassword);
  yield takeEvery(RESET_PASSWORD_CODE, resetPCode);
  // yield takeEvery(LOGIN_USER, loginUser);
  // yield takeLatest(SOCIAL_LOGIN, socialLogin);
  // yield takeEvery(LOGOUT_USER, logoutUser);
  // yield takeEvery(LOGIN_USER, testLoginUser);
  // yield takeEvery(TEST_VERIFY, testVerifyUser)
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(UPDATE_PROFILE, updateProfile);
  yield takeEvery(LOGOUT, logout);
  
}

export default authSaga;
