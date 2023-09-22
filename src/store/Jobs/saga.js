import { call, put, takeEvery } from "redux-saga/effects";
import {
  CREATE_JOB_STATUS,
  CREATE_JOB_STATUS_SUCCESS,
  CREATE_JOB_STATUS_ERROR,
  JOB_STATUS,
  JOB_STATUS_SUCCESS,
  JOB_STATUS_ERROR,
  UPDATE_JOB_STATUS,
  UPDATE_JOB_STATUS_SUCCESS,
  UPDATE_JOB_STATUS_ERROR,
  CREATE_JOB,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  UPDATE_JOB,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_ERROR,
  JOBS,
  JOBS_SUCCESS,
  JOBS_ERROR,
  APPROVE_JOBS,
  APPROVE_JOBS_SUCCESS,
  APPROVE_JOBS_ERROR,
} from "./actionTypes";

import {
  createStatusSuccess,
  createStatusError,
  getStatusSuccess,
  getStatusError,
  updateStatusSuccess,
  updateStatusError,
  createJobSuccess,
  createJobError,
  updateJobSuccess,
  updateJobError,
  jobsSuccess,
  jobsError,
  approveJobsSuccess,
  approveJobsError,
  jobs as jobAction, 
jobStatus as jobStatusAction,
jobStatusError,
jobStatusSuccess,

} from "./action";

import {
  createJobStatusURL,
  jobStatusURL,
  updateJobStatusURL,
  createJobURL,
  updateJobURL,
  jobsURL,
  approveJobsURL,
  createjobStatusURL,
  approveJobURL,
} from "../../helpers/fakebackend_helper";

function* createJobStatus({payload: data}) {
  try {
    const response = yield call(createjobStatusURL, data);
    if (response.status === 1) {
      yield put(createStatusSuccess(response?.data));
      yield put (jobStatusAction({viewAction: ""}))
    } else {
      yield put(createStatusError(response));
      yield put (jobStatusAction({viewAction: ""}))
    }
  } catch (error) {
    yield put(createStatusError(error));
    yield put (jobStatusAction({viewAction: ""}))
  }
}

function* jobStatus({payload: data}) {
  try {
    const response = yield call(jobStatusURL, data);
    if (response?.data?.status === 1) {
      yield put(jobStatusSuccess(response?.data?.data));
   
    } else {
      yield put(jobStatusError(response?.data));
    
    }
  } catch (error) {
    yield put(jobStatusError(error));
  
  }
}

function* updateJobStatus({payload: data}) {
  try {
    const response = yield call(updateJobStatusURL, data);
    if (response.status === 1) {
      yield put(updateStatusSuccess(response?.data));
      yield put (jobStatusAction({viewAction: ""}))
    } else {
      yield put(updateStatusError(response));
      yield put (jobStatusAction({viewAction: ""}))
    }
  } catch (error) {
    yield put(updateStatusError(error));
    yield put (jobStatusAction({viewAction: ""}))
  }
}

function* createJob({payload: data}) {
  try {
    const response = yield call(createJobURL, data);
    if (response.status === 1) {
      yield put(createJobSuccess(response.data));
      yield put (jobAction({viewAction: ""}))
    } else {
      yield put(createJobError(response));
      yield put (jobAction({viewAction: ""}))
    }
  } catch (error) {
    yield put(createJobError(error));
    yield put (jobAction({viewAction: ""}))
  }
}

function* updateJob({payload: data}) {
  try {
    const response = yield call(updateJobURL, data);
    if (response.status === 1) {
      yield put(updateJobSuccess(response.data));
      yield put (jobAction({viewAction: ""}))
    } else {
      yield put(updateJobError(response));
      yield put (jobAction({viewAction: ""}))
    }
  } catch (error) {
    yield put(updateJobError(error));
    yield put (jobAction({viewAction: ""}))
  }
}

function* Jobs({payload: data}) {
  try {
    const response = yield call(jobsURL, data);
    console.log(response)
    if (response && response.data.status === 1) {
      yield put(jobsSuccess(response.data.data));
    
    } else {
      yield put(jobsError(response));
    
    }
  } catch (error) {
    yield put(jobsError(error));
   
  }
}

function* approveJobs({payload: data}) {
  try {
    const response = yield call(approveJobURL, data);
    if (response.status === 1) {
      yield put(approveJobsSuccess(response.data));
      yield put (jobAction({viewAction: ""}))
    } else {
      yield put(approveJobsError(response));
      yield put (jobAction({viewAction: ""}))
    }
  } catch (error) {
    yield put(approveJobsError(error));
    yield put (jobAction({viewAction: ""}))
  }
}

function* JobsSaga() {
  yield takeEvery(CREATE_JOB_STATUS, createJobStatus);
  yield takeEvery(JOB_STATUS, jobStatus);
  yield takeEvery(UPDATE_JOB_STATUS, updateJobStatus);
  yield takeEvery(CREATE_JOB, createJob);
  yield takeEvery(UPDATE_JOB, updateJob);
  yield takeEvery(JOBS, Jobs);
  yield takeEvery(APPROVE_JOBS, approveJobs);
}

export default JobsSaga;
