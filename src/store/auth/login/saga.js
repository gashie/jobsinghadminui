import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN, TEST_VERIFY } from "./actionTypes";
import { apiError, loginSuccess, logoutUserSuccess, testVerifySuccess } from "./actions";
import {useNavigate} from 'react-router-dom'

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
  testLoginURL,
  testVerifyURL,

} from "../../../helpers/fakebackend_helper";

function* loginUser({ payload: { user, history } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      );
      if (response) {
        yield put(loginSuccess(response));
        history('/dashboard')
      } else {
        yield put(apiError(response));
      }
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      });
      sessionStorage.setItem("authUser", JSON.stringify(response));
      if (response) {
        yield put(loginSuccess(response));
        history('/dashboard')
      } else {
        yield put(apiError(response));
      }
    } else if (process.env.REACT_APP_API_URL) {
      const response = yield call(postFakeLogin, {
        email: user.email,
        password: user.password,
      });
      if (response.status === "success") {
        yield put(loginSuccess(response));
        history('/dashboard')
        sessionStorage.setItem("authUser", JSON.stringify(response));
      } else {
        yield put(apiError(response));
      }
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* logoutUser() {
  try {
    sessionStorage.removeItem("authUser");
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      const response = yield call(fireBaseBackend.logout);
      yield put(logoutUserSuccess(LOGOUT_USER, response));
    } else {
      yield put(logoutUserSuccess(LOGOUT_USER, true));
    }
  } catch (error) {
    yield put(apiError(LOGOUT_USER, error));
  }
}

function* socialLogin({ payload: { data, history, type } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      const response = yield call(fireBaseBackend.socialLoginUser, type);
      if (response) {
        history("/dashboard");
      } else {
        history("/login");
      }
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    } else {
      const response = yield call(postSocialLogin, data);
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    }
    history('/dashboard');
  } catch (error) {
    yield put(apiError(error));
  }
}

function* testLoginUser ({payload: user}){
  try{
       const response = yield call(testLoginURL, user)
       yield put(loginSuccess(response))
       const navigate = useNavigate
      //  if(response.role === "seeker"){
      //   window.location.href="/job-seeker-admin"
      //  }
      if(response.role === 'seeker'){
        alert('Logged in')
        loginSuccess(response)
       navigate('/test-home')
      }else{
        alert('Error')
      }
       console.log(response)
  }catch(error){
       console.log(error)
  }
}

function* testVerifyUser(){
  try{
      const response = yield call(testVerifyURL)

      console.log(response)
      if(response.Status === "Success"){
        yield put(testVerifySuccess(response))
      }
  }catch(error){
        console.log(error)
  }
}

function* authSaga() {
  // yield takeEvery(LOGIN_USER, loginUser);
  yield takeLatest(SOCIAL_LOGIN, socialLogin);
  yield takeEvery(LOGOUT_USER, logoutUser);
  yield takeEvery(LOGIN_USER, testLoginUser);
  yield takeEvery(TEST_VERIFY, testVerifyUser)
}

export default authSaga;
