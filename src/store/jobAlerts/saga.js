import { call, put, takeEvery } from "redux-saga/effects";

import {
  APPLY_FOR_JOBS,
  CREATE_JOB_ALERT,
  FULL_JOB_DETAILS,
  SAVE_JOBS,
  UPDATE_JOB_ALERT,
  UPDATE_SAVED_JOBS,
  VIEW_JOB_ALERTS,
  VIEW_SAVED_JOBS,
} from "./actionTypes";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  viewjobAlerts as alertAction,
  viewjobAlertsSuccess,
  viewjobAlertsError,
  createJobAlertSuccess,
  createJobAlertError,
  updateJobAlertSuccess,
  updateJobAlertError,
  viewSavedJobsSuccess,
  viewSavedJobsError,
  updateSavedJobsSuccess,
  updateSavedJobsError,
  saveJobsSuccess,
  saveJobsError,
  viewSavedJobs as savedAction,
  fullJobDetailsSuccess,
  fullJobDetailsError,
  applyForJobsSuccess,
  applyForJobsError
} from "./action";

import {
  viewJobAlertsURL,
  createJobAlertURL,
  updateJobAlertURL,
  viewSavedJobsURL,
  updateSavedJobsURL,
  saveJobURL,
  fullJobDetailsURL,
  applyForJobURL,
} from "../../helpers/fakebackend_helper";

function* viewJobAlerts({ payload: action }) {
  try {
    const response = yield call(viewJobAlertsURL, action);

    if (response && response?.status === 200 && response?.data?.status === 1) {
      yield put(viewjobAlertsSuccess(response?.data?.data));
     
    } else {
      yield put(viewjobAlertsError(response));
      // toast.success(`${response?.data?.message}`, {
      //   autoClose: 3000,
      // });
    }
  } catch (error) {
    console.log(error);
    yield put(viewjobAlertsError(error));
  }
}

function* viewSavedJobs({ payload: action }) {
  try {
    const response = yield call(viewSavedJobsURL, action);

    if (response && response?.data?.status === 1) {
      yield put(viewSavedJobsSuccess(response?.data.data));
    } else {
      yield put(viewSavedJobsError(response));
      // toast.success(`${response?.data?.message}`, {
      //   autoClose: 3000,
      // });
    }
  } catch (error) {
   
    yield put(viewSavedJobsError(error));
  }
}

function* createJobAlert({ payload: data }) {
  try {
    const response = yield call(createJobAlertURL, data);

    if (response && response?.status === 200 && response?.data?.status === 1) {
      yield put(createJobAlertSuccess());
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(alertAction({viewAction: ""}))
    } else {
      yield put(createJobAlertError(response));
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(alertAction({viewAction: ""}))
    }
  } catch (error) {
    console.log(error);
    yield put(createJobAlertError(error));
  }
}

function* updateJobAlert({ payload }) {
  try {
    const response = yield call(updateJobAlertURL, payload);

    if (response && response?.data?.status === 1) {
      yield put(updateJobAlertSuccess());
      toast.warning(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(alertAction({viewAction: ""}))
    } else {
      yield put(updateJobAlertError(response));
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(alertAction({viewAction: ""}))
    }
  } catch (error) {
    console.log(error);
    yield put(updateJobAlertError(error));
  }
}

function* updateSavedJobs({ payload }) {
  try {
    const response = yield call(updateSavedJobsURL, payload);
console.log(response)
    if (response && response?.data?.status === 1) {
      yield put(updateSavedJobsSuccess());
      toast.warning(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(savedAction({viewAction: ""}))
    } else {
      yield put(updateSavedJobsError(response));
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(savedAction({viewAction: ""}))
    }
  } catch (error) {
    console.log(error);
    yield put(updateSavedJobsError(error));
  }
}
function* saveJob({ payload }) {
  try {
    const response = yield call(saveJobURL, payload);

    if (response && response?.data?.status === 1) {
      yield put(saveJobsSuccess());
      toast.warning(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(savedAction({viewAction: ""}))
    } else {
      yield put(saveJobsError(response));
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(savedAction({viewAction: ""}))
    }
  } catch (error) {
    console.log(error);
    yield put(saveJobsError(error));
  }
}

function* applyForJob({ payload }) {
  try {
    const response = yield call(applyForJobURL, payload);

    if (response && response?.data?.status === 1) {
      yield put(applyForJobsSuccess());
      toast.warning(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(savedAction({viewAction: ""}))
    } else {
      yield put(applyForJobsError(response));
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(savedAction({viewAction: ""}))
    }
  } catch (error) {
    console.log(error);
    yield put(applyForJobsError(error));
  }
}

function* fullJobDetails({ payload: action }) {
  try {
    const response = yield call(fullJobDetailsURL, action);

    if (response && response.data.status === 1) {
      yield put(fullJobDetailsSuccess(response.data.data));
    } else {
      yield put(fullJobDetailsError(response.data.message));
      // toast.success(`${response?.data?.message}`, {
      //   autoClose: 3000,
      // });
    }
  } catch (error) {
   
    yield put(fullJobDetailsError(error));
  }
}

function* jobAlertSaga() {
  yield takeEvery(VIEW_JOB_ALERTS, viewJobAlerts);
  yield takeEvery(CREATE_JOB_ALERT, createJobAlert);
  yield takeEvery(UPDATE_JOB_ALERT, updateJobAlert);
  yield takeEvery(VIEW_SAVED_JOBS, viewSavedJobs);
  yield takeEvery(UPDATE_SAVED_JOBS, updateSavedJobs);
  yield takeEvery(SAVE_JOBS, saveJob);
  yield takeEvery(APPLY_FOR_JOBS, applyForJob);
  yield takeEvery(FULL_JOB_DETAILS, fullJobDetails);
}

export default jobAlertSaga;
