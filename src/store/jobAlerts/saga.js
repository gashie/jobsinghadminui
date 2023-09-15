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
} from "./action";

import { viewJobAlertsURL,createJobAlertURL, updateJobAlertURL } from "../../helpers/fakebackend_helper";

function* viewJobAlerts ({payload: action}){
  try{
    const response  = yield call(viewJobAlertsURL, action);
 
    if(response && response?.status === 200 && response?.data?.status === 1){
       yield put(viewjobAlertsSuccess(response?.data?.data))
    }else{
      yield put(viewjobAlertsError(response))
    }
  }catch(error){
    console.log(error)
    yield put(viewjobAlertsError(error))
  }
}

function *createJobAlert ({payload: data}){
  try{
    const response  = yield call(createJobAlertURL, data);
 
    if(response && response?.status === 200 && response?.data?.status === 1){
       yield put(createJobAlertSuccess())
       toast.success("Job Alert Created Successfully", {
        autoClose: 3000,
      });
    }else{
      yield put(createJobAlertError(response))
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
      toast.warning("Job Alert Deleted Successfully", {
        autoClose: 3000,
      });
    } else {
      yield put(updateJobAlertError(response));
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