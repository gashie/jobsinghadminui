import { call, put, takeEvery } from "redux-saga/effects";

import { VIEW_JOB_ALERTS } from "./actionTypes";

import {
  viewjobAlerts,
  viewjobAlertsSuccess,
  viewjobAlertsError,
} from "./action";

import { viewJobAlertsURL } from "../../helpers/fakebackend_helper";

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


function* jobAlertSaga(){
    yield takeEvery(VIEW_JOB_ALERTS, viewJobAlerts)
}

export default jobAlertSaga;