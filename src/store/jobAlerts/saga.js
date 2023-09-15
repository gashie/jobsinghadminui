import { call, put, takeEvery } from "redux-saga/effects";

import { CREATE_JOB_ALERT, UPDATE_JOB_ALERT, VIEW_JOB_ALERTS } from "./actionTypes";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  viewjobAlerts,
  viewjobAlertsSuccess,
  viewjobAlertsError,
  createJobAlertSuccess,
  createJobAlertError,
  updateJobAlertSuccess,
  updateJobAlertError,
  viewSavedJobsSuccess,
  viewSavedJobsError,
} from "./action";

import { viewJobAlertsURL,createJobAlertURL, updateJobAlertURL, viewSavedJobsURL } from "../../helpers/fakebackend_helper";

function* viewJobAlerts ({payload: action}){
  try{
    const response  = yield call(viewJobAlertsURL, action);
 
    if(response && response?.status === 200 && response?.data?.status === 1){
       yield put(viewjobAlertsSuccess(response?.data?.data))
       toast.success(`${response.message}`, {
        autoClose: 3000,
      });
    }else{
      yield put(viewjobAlertsError(response))
      toast.success(`${response.message}`, {
        autoClose: 3000,
      });
    }
  }catch(error){
    console.log(error)
    yield put(viewjobAlertsError(error))
  }
}


function* viewSavedJobs ({payload: action}){
  try{
    const response  = yield call(viewSavedJobsURL, action);
 
    if(response && response?.status === 200 && response?.data?.status === 1){
       yield put(viewSavedJobsSuccess(response?.data?.data))
       toast.success(`${response.message}`, {
        autoClose: 3000,
      });
    }else{
      yield put(viewSavedJobsError(response))
      toast.success(`${response.message}`, {
        autoClose: 3000,
      });
    }
  }catch(error){
    console.log(error)
    yield put(viewSavedJobsError(error))
  }
}

function *createJobAlert ({payload: data}){
  try{
    const response  = yield call(createJobAlertURL, data);
 
    if(response && response?.status === 200 && response?.data?.status === 1){
       yield put(createJobAlertSuccess())
       toast.success(`${response.message}`, {
        autoClose: 3000,
      });
    }else{
      yield put(createJobAlertError(response))
      toast.success(`${response.message}`, {
        autoClose: 3000,
      });
    }
  }catch(error){
    console.log(error)
    yield put(createJobAlertError(error))
  }
}

function* updateJobAlert ({payload}){
  try {
    const response = yield call(updateJobAlertURL, payload);

    if (response && response?.status === 200 && response?.data?.status === 1) {
      yield put(updateJobAlertSuccess());
      toast.warning(`${response.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(updateJobAlertError(response));
      toast.success(`${response.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(updateJobAlertError(error));
  }
}


function* jobAlertSaga(){
    yield takeEvery(VIEW_JOB_ALERTS, viewJobAlerts)
    yield takeEvery(CREATE_JOB_ALERT, createJobAlert)
    yield takeEvery(UPDATE_JOB_ALERT, updateJobAlert)
}

export default jobAlertSaga;