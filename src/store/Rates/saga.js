import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import {
  APPROVE_RATE_CARD,
  CREATE_RATE_CARD,
  PAY,
  RATE_CARD,
  UPDATE_RATE_CARD,
} from "./actionTypes";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  rateCard as rateCardAction,
  rateCardSuccess,
  rateCardError,
  updateRateCardSuccess,
  rateCard,
  approveRateCardSuccess,
  approveRateCardError,
  updateRateCardError,
  createRateCardSuccess,
  createRateCardError,
  paySuccess,
  payError,
} from "./action";
import {
  approveRateCardURL,
  createRateCardURL,
  payURL,
  rateCardURL,
  updateRatecardURL,
} from "../../helpers/fakebackend_helper";

const Nav = (location) => {
  let navigate = useNavigate();
  navigate(`${location}`);
};

//official
function* rateCards({ payload: data }) {
  try {
    const response = yield call(rateCardURL, data);
    console.log(response);
    if (response && response.data.status === 1) {
      yield put(rateCardSuccess(response.data.data));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(rateCardError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(rateCardError(error));
  }
}

function* pay({ payload: data }) {
  try {
    const response = yield call(payURL, data);
    console.log(response);
    if (response && response.data.status === 1) {
      yield put(paySuccess(response.data.data));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(payError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(payError(error));
  }
}

function* updateRateCard({ payload: data }) {
  try {
    const response = yield call(updateRatecardURL, data);

    if (response && response.data.status === 1) {
      //  yield put(updateRatecardURL());
      yield put(updateRateCardSuccess());
      yield put(rateCardAction({ viewAction: "" }));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(updateRateCardError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
      yield put(rateCardAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(updateRateCardSuccess(error));
    yield put(rateCardAction({ viewAction: "" }));
  }
}

function* approveRateCard({ payload: data }) {
  try {
    const response = yield call(approveRateCardURL, data);

    if (response && response.data.status === 1) {
      yield put(rateCardAction({ viewAction: "" }));
      yield put(approveRateCardSuccess());
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(approveRateCardError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
      yield put(rateCardAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(approveRateCardError(error));
    yield put(rateCardAction({ viewAction: "" }));
  }
}

function* createRateCard({ payload: data }) {
  try {
    const response = yield call(createRateCardURL, data);

    if (response && response.data.status === 1) {
      yield put(createRateCardSuccess());
      yield put(rateCardAction({ viewAction: "" }));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(createRateCardError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
      yield put(rateCardAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(createRateCardError(error));
    yield put(rateCardAction({ viewAction: "" }));
  }
}

function* RatesSaga() {
  yield takeEvery(RATE_CARD, rateCards);
  yield takeEvery(APPROVE_RATE_CARD, approveRateCard);
  yield takeEvery(UPDATE_RATE_CARD, updateRateCard);
  yield takeEvery(CREATE_RATE_CARD, createRateCard);
  yield takeEvery(PAY, pay);
}

export default RatesSaga;
