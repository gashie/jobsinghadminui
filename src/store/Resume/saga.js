import { call, put, takeEvery } from "redux-saga/effects";

import {
  CREATE_CV,
  CREATE_RESUME,
  UPDATE_CV,
  UPDATE_RESUME,
  VIEW_CV,
  VIEW_RESUME,
} from "./actionTypes";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  viewResumeSuccess,
  viewResumeError,
  viewCvSuccess,
  viewCvError,
  createResumeSuccess,
  createResumeError,
  createCvSuccess,
  createCvError,
  updateResumeSuccess,
  updateResumeError,
  updateCvSuccess,
  updateCvError,
} from "./action";

import {
  viewResumeURL,
  viewCvURL,
  createResumeURL,
  createCvURL,
  updateResumeURL,
  updateCvURL,
} from "../../helpers/fakebackend_helper";

function* viewResumes({ payload: action }) {
  try {
    const response = yield call(viewResumeURL, action);

    if (response && response?.status === 200 && response?.data?.status === 1) {
      yield put(viewResumeSuccess(response?.data));
    } else {
      yield put(viewResumeError(response));
    }
  } catch (error) {
    console.log(error);
    yield put(viewResumeError(error));
  }
}

function* viewCv({ payload: action }) {
  try {
    const response = yield call(viewCvURL, action);

    if (response && response?.status === 200 && response?.data?.status === 1) {
      yield put(viewCvSuccess(response?.data?.data));
    } else {
      yield put(viewCvError(response));
    }
  } catch (error) {
    console.log(error);
    yield put(viewCvError(error));
  }
}

function* createResume({ payload: data }) {
  try {
    const response = yield call(createResumeURL, data);

    if (response && response?.status === 200 && response?.data?.status === 1) {
      yield put(createResumeSuccess());
      toast.success("Job Alert Created Successfully", {
        autoClose: 3000,
      });
    } else {
      yield put(createResumeError(response));
    }
  } catch (error) {
    console.log(error);
    yield put(createResumeError(error));
  }
}

function* createCv({ payload: data }) {
  try {
    const response = yield call(createCvURL, data);

    if (response && response?.status === 200 && response?.data?.status === 1) {
      yield put(createCvSuccess());
      toast.success("Cover Created Successfully", {
        autoClose: 3000,
      });
    } else {
      yield put(createCvError(response));
    }
  } catch (error) {
    console.log(error);
    yield put(createCvError(error));
  }
}

function* updateResume ({payload}){
  try {
    const response = yield call(updateResumeURL, payload);

    if (response && response?.status === 200 && response?.data?.status === 1) {
      yield put(updateResumeSuccess());
      toast.success("Job Alert Created Successfully", {
        autoClose: 3000,
      });
    } else {
      yield put(updateResumeError(response));
    }
  } catch (error) {
    console.log(error);
    yield put(updateResumeError(error));
  }
}

function* updateCv ({payload}){
  try {
    const response = yield call(updateCvURL, payload);

    if (response && response?.status === 200 && response?.data?.status === 1) {
      yield put(updateCvSuccess());
      toast.success("Cover Letter Edit Succesful", {
        autoClose: 3000,
      });
    } else {
      yield put(updateCvError(response));
    }
  } catch (error) {
    console.log(error);
    yield put(updateCvError(error));
  }
}

function* ResumeSaga() {

  yield takeEvery(CREATE_CV, createCv);
  yield takeEvery(CREATE_RESUME, createResume);
  yield takeEvery(VIEW_CV, viewCv);
  yield takeEvery(VIEW_RESUME, viewResumes);
  yield takeEvery(UPDATE_RESUME, updateResume);
  yield takeEvery(UPDATE_CV, updateCv);
}

export default ResumeSaga;
