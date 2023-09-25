import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { EMPLOYERS, JOBSEEKER, UPDATE_PROILE } from "./actionTypes";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import {
  employersURL,
  jobseekersURL,
  updateUserProfileURL,
} from "../../helpers/fakebackend_helper";
import {
  employersError,
  employersSuccess,
  jobseekersError,
  jobseekersSuccess,
  updateUserProfileError,
  updateUserProfileSuccess,
} from "./action";

const Nav = (location) => {
  let navigate = useNavigate();
  navigate(`${location}`);
};

//official
function* jobseekers({ payload: data }) {
  try {
    const response = yield call(jobseekersURL, data);

    if (response && response?.status === 1) {
      yield put(jobseekersSuccess(response?.data));
      toast.success(`${response?.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(jobseekersError(response));
      toast.success(`${response?.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(jobseekersError(error));
  }
}

function* updateProfile({ payload: data }) {
  try {
    const response = yield call(updateUserProfileURL, data);

    if (response && response?.status === 1) {
      //  yield put(updateRatecardURL());
      yield put(updateUserProfileSuccess());
      // yield put(rateCardAction({ viewAction: "" }));
      toast.success(`Changes to your profile has been made, please logout and login again to view changes`, {
        autoClose: 6000,
      });
    } else {
      yield put(updateUserProfileError(response));
      toast.success(`${response?.message}`, {
        autoClose: 3000,
      });
      // yield put(rateCardAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(updateUserProfileError(error));
    // yield put(rateCardAction({ viewAction: "" }));
  }
}

function* employers({ payload: data }) {
  try {
    const response = yield call(employersURL, data);

    if (response && response?.status === 1) {
      // yield put(rateCardAction({ viewAction: "" }));
      yield put(employersSuccess(response?.data));
      toast.success(`${response?.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(employersError(response));
      toast.success(`${response?.message}`, {
        autoClose: 3000,
      });
      // yield put(rateCardAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(employersError(error));
    // yield put(rateCardAction({ viewAction: "" }));
  }
}

function* UsersSaga() {
  yield takeEvery(JOBSEEKER, jobseekers);
  yield takeEvery(UPDATE_PROILE, updateProfile);
  yield takeEvery(EMPLOYERS, employers);
}

export default UsersSaga;
