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
  viewCv as cvAction,
  viewResume as resumeAction,
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

    if (response && response?.data?.status === 1) {
      yield put(viewResumeSuccess(response?.data.data));
      console.log(response);
    } else {
      // yield put(viewResumeError(response.data.message));
      // toast.error(`${response?.data?.message}`, {
      //   autoClose: 3000,
      // });
    }
  } catch (error) {
    console.log(error);
    yield put(viewResumeError(error));
  }
}

function* viewCv({ payload: action }) {
  try {
    const response = yield call(viewCvURL, action);
    console.log(response);
    console.log(response.data);
    console.log(response.data.status);
    if (response && response.data.status === 1) {
      yield put(viewCvSuccess(response?.data?.data));
    } else {
      yield put(viewCvError(response.data.message));
      // toast.warn(`${response?.data?.message}`, {
      //   autoClose: 3000,
      // });
    }
  } catch (error) {
    console.log(error);
    yield put(viewCvError(error));
  }
}

function* createResume({ payload: data }) {
  try {
    const response = yield call(createResumeURL, data);

    if (response && response?.data?.status === 1) {
      yield put(createResumeSuccess());
      yield put(cvAction({ viewAction: "" }));
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(createResumeError(response.data.message));
      toast.error(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(cvAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(createResumeError(error));
    yield put(cvAction({ viewAction: "" }));
  }
}

function* createCv({ payload: data }) {
  try {
    const response = yield call(createCvURL, data);

    if (response && response?.data?.status === 1) {
      yield put(createCvSuccess());
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(cvAction({ viewAction: "" }));
    } else {
      yield put(createCvError(response.data.message));
      toast.error(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(cvAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(createCvError(error));
    yield put(cvAction({ viewAction: "" }));
  }
}

function* updateResume({ payload }) {
  try {
    const response = yield call(updateResumeURL, payload);

    if (response && response?.data?.status === 1) {
      yield put(updateResumeSuccess());
      console.log(response);
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(resumeAction({ viewAction: "" }));
    } else {
      yield put(updateResumeError(response.data.message));
      toast.error(`${response?.data?.message}. Please Try Again`, {
        autoClose: 3000,
      });
      yield put(resumeAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(updateResumeError(error));
    yield put(resumeAction({ viewAction: "" }));
  }
}

function* updateCv({ payload }) {
  try {
    const response = yield call(updateCvURL, payload);

    if (response && response?.data?.status === 1) {
      yield put(updateCvSuccess());
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(cvAction({ viewAction: "" }));
    } else {
      yield put(updateCvError(response.data.message));
      toast.error(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(cvAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(updateCvError(error));
    yield put(cvAction({ viewAction: "" }));
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
