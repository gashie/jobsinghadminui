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
  UPDATE_LOGO,
  EMPLOYER_APPLICATIONS,
  EMPLOYER_SHORTLIST,
  JOBSEEKER_APPLICATIONS,
  APPROVE_APPLICATIONS,
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
  jobseekerApplicationsSuccess,
  jobseekerApplicationsError,
  approveApplicationsSuccess,
  approveApplicationsError,
  employerApplicationsSuccess,
  employerShortlistError,
  employerApplicationsError,
  // updateLogoSuccess,
  // updateLogoError,
  employerApplications as applicationsAction
} from "./action";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  jobSeekerApplicationsURL,
  approveApplicationsURL,
  employerShortlistApplicationsURL,
  employerApplicationsURL,
  //updateLogoURL,
} from "../../helpers/fakebackend_helper";

function* createJobStatus({ payload: data }) {
  try {
    const response = yield call(createjobStatusURL, data);
    if (response.data.status === 1) {
      yield put(createStatusSuccess(response?.data?.data));
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(jobStatusAction({ viewAction: "" }));
    } else {
      yield put(createStatusError(response));
      toast.warn(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(jobStatusAction({ viewAction: "" }));
    }
  } catch (error) {
    yield put(createStatusError(error));

    yield put(jobStatusAction({ viewAction: "" }));
  }
}

function* jobStatus({ payload: data }) {
  try {
    const response = yield call(jobStatusURL, data);
    if (response.data.status === 1) {
      yield put(jobStatusSuccess(response?.data?.data));
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(jobStatusError(response?.data.message));
      toast.warn(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    yield put(jobStatusError(error));
  }
}

function* updateJobStatus({ payload: data }) {
  try {
    const response = yield call(updateJobStatusURL, data);
    if (response.data.status) {
      yield put(updateStatusSuccess(response?.data.data));
      yield put(jobStatusAction({ viewAction: "" }));
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(updateStatusError(response));
      toast.warn(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(jobStatusAction({ viewAction: "" }));
    }
  } catch (error) {
    yield put(updateStatusError(error));
    yield put(jobStatusAction({ viewAction: "" }));
  }
}

function* createJob({ payload: data }) {
  try {
    const response = yield call(createJobURL, data);
    if (response.data.status === 1) {
      yield put(createJobSuccess(response.data.data));
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(jobAction({ viewAction: "" }));
    } else {
      yield put(createJobError(response));
      toast.warn(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(jobAction({ viewAction: "" }));
    }
  } catch (error) {
    yield put(createJobError(error));
    yield put(jobAction({ viewAction: "" }));
  }
}

function* updateJob({ payload: data }) {
  try {
    const response = yield call(updateJobURL, data);
    if (response.data.status === 1) {
      yield put(updateJobSuccess(response.data.data));
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(jobAction({ viewAction: "" }));
    } else {
      yield put(updateJobError(response));
      toast.warn(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(jobAction({ viewAction: "" }));
    }
  } catch (error) {
    yield put(updateJobError(error));
    yield put(jobAction({ viewAction: "" }));
  }
}

function* Jobs({ payload: data }) {
  try {
    const response = yield call(jobsURL, data);
    console.log(response);
    if (response && response.data.status === 1) {
      yield put(jobsSuccess(response.data.data));
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(jobsError(response.data.message));
      toast.warn(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    yield put(jobsError(error));
  }
}

function* approveJobs({ payload: data }) {
  try {
    const response = yield call(approveJobURL, data);
    if (response.data.status === 1) {
      yield put(approveJobsSuccess(response.data.data));
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(jobAction({ viewAction: "" }));
    } else {
      yield put(approveJobsError(response.data.message));
      toast.warn(`${response?.data?.message}`, {
        autoClose: 3000,
      });
      yield put(jobAction({ viewAction: "" }));
    }
  } catch (error) {
    yield put(approveJobsError(error));
    yield put(jobAction({ viewAction: "" }));
  }
}

function* jobSeekerApplications({ payload: data }) {
  try {
    // Make the API call here
    const response = yield call(jobSeekerApplicationsURL, data);

    if (response && response.data.status) {
      yield put(jobseekerApplicationsSuccess(response.data.data));
     
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(jobseekerApplicationsError(response.data.data));
      toast.warn(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    yield put(jobseekerApplicationsError(error));
  }
}

function* approveApplications({ payload: data }) {
  try {
    const response = yield call(approveApplicationsURL, data);

    if (response && response.data.status) {
      yield put(approveApplicationsSuccess(response.data.data));
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(approveApplicationsError(response.data.data));
      toast.warn(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    yield put(approveApplicationsError(error));
  }
}

function* employerShortlist({ payload: data }) {
  try {
    const response = yield call(employerShortlistApplicationsURL, data);

    if (response && response.data.status) {
      yield put(employerShortlistError(response.data.data));
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(employerShortlistError(response.data.data));
      toast.warn(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    yield put(employerShortlistError(error));
  }
}

function* employerApplications({ payload: data }) {
  try {
    const response = yield call(employerApplicationsURL, data);

    if (response && response.data.status) {
      yield put(employerApplicationsSuccess(response.data.data));
      toast.success(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(employerApplicationsError(response.data.data));
      toast.warn(`${response?.data?.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    yield put(employerApplicationsError(error));
  }
}

// function* updateLogo({payload: data}) {
//   try {

//     const response = yield call(updateLogoURL, data);

//     if(response && response.data.status){
//       yield put(updateLogoSuccess(response.data.data));
//       toast.success(`${response?.data?.message}`, {
//         autoClose: 3000,
//       });
//     }else{
//       yield put(updateLogoError(response.data.data));
//       toast.warn(`${response?.data?.message}`, {
//         autoClose: 3000,
//       });
//     }
//   } catch (error) {
//     yield put(updateLogoError(error));
//   }
// }

function* JobsSaga() {
  yield takeEvery(CREATE_JOB_STATUS, createJobStatus);
  yield takeEvery(JOB_STATUS, jobStatus);
  yield takeEvery(UPDATE_JOB_STATUS, updateJobStatus);
  yield takeEvery(CREATE_JOB, createJob);
  yield takeEvery(UPDATE_JOB, updateJob);
  yield takeEvery(JOBS, Jobs);
  yield takeEvery(APPROVE_JOBS, approveJobs);

  //yield takeEvery(UPDATE_LOGO, updateLogo);
  yield takeEvery(EMPLOYER_APPLICATIONS, employerApplications);
  yield takeEvery(EMPLOYER_SHORTLIST, employerShortlist);
  yield takeEvery(JOBSEEKER_APPLICATIONS, jobSeekerApplications);
  yield takeEvery(APPROVE_APPLICATIONS, approveApplications);
}

export default JobsSaga;
