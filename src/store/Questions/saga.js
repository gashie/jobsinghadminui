import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import {
  APPROVE_RATE_CARD,
  CREATE_JOB_QUESTION,
  CREATE_QUESTION,
  CREATE_QUESTION_MULTIPLE,
  CREATE_QUESTION_SINGLE,
  CREATE_QUESTION_Y_N,
  CREATE_RATE_CARD,
  LINK_JOB_QUESTION,
  RATE_CARD,
  UNLINK_JOB_QUESTION,
  UPDATE_RATE_CARD,
  VIEW_MY_QUESTIONS,
} from "./actionTypes";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  rateCard as rateCardAction,
 
  unlinkJobQuestionSuccess,
  unlinkJobQuestionError,
  createJobQuestionSuccess,
  createJobQuestionError,
  linkJobQuestionSuccess,
  linkJobQuestionError,
  createQuestionSingleSuccess,
  createQuestionSingleError,
  createQuestionMultipleSuccess,
  createQuestionMultipleError,
  createQuestionYNSuccess,
  createQuestionYNError,
  createQuestionSuccess,
  createQuestionError,
  viewMyQuestionsSuccess,
  viewMyQuestionsError,
} from "./action";
import {
 
  createBulkQuestionURL,
  createQuestionURL,

  linkJobQuestionURL,
 
  unlinkJobQuestionURL,
  viewMyQuestions,
 
} from "../../helpers/fakebackend_helper";

const Nav = (location) => {
  let navigate = useNavigate();
  navigate(`${location}`);
};

//official
function* createQuestions({ payload: data }) {
  try {
    const response = yield call(createQuestionURL, data);
    console.log(response);
    if (response && response.data.status === 1) {
      yield put(createQuestionSuccess(response.data.data));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(createQuestionError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(createQuestionError(error));
  }
}

function* unlinkQuestion({ payload: data }) {
  try {
    const response = yield call(unlinkJobQuestionURL, data);

    if (response && response.data.status === 1) {
      //  yield put(updateRatecardURL());
      yield put(unlinkJobQuestionSuccess());
     // yield put(rateCardAction({ viewAction: "" }));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(unlinkJobQuestionError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
     // yield put(unlinkJobQuestionError({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(unlinkJobQuestionError(error));
   // yield put(rateCardAction({ viewAction: "" }));
  }
}

function* linkQuestion({ payload: data }) {
  try {
    const response = yield call(linkJobQuestionURL, data);

    if (response && response.data.status === 1) {
    //  yield put(rateCardAction({ viewAction: "" }));
      yield put(linkJobQuestionSuccess());
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(linkJobQuestionError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
     // yield put(rateCardAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(linkJobQuestionError(error));
   // yield put(rateCardAction({ viewAction: "" }));
  }
}

function* createJobQuestion({ payload: data }) {
  try {
    const response = yield call(createBulkQuestionURL, data);

    if (response && response.data.status === 1) {
      yield put(createJobQuestionSuccess());
     // yield put(rateCardAction({ viewAction: "" }));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(createJobQuestionError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    //  yield put(rateCardAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(createJobQuestionError(error));
  //  yield put(rateCardAction({ viewAction: "" }));
  }
}
function* createQuestionSingle({ payload: data }) {
  try {
    const response = yield call(createQuestionURL, data);

    if (response && response.data.status === 1) {
      yield put(createQuestionSingleSuccess());
     // yield put(rateCardAction({ viewAction: "" }));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(createQuestionSingleError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
     // yield put(rateCardAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(createQuestionSingleError(error));
   // yield put(rateCardAction({ viewAction: "" }));
  } 
}

function* createQuestionMultiple({ payload: data }) {
  try {
    const response = yield call(createQuestionURL, data);

    if (response && response.data.status === 1) {
      yield put(createQuestionMultipleSuccess());
     // yield put(rateCardAction({ viewAction: "" }));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(createQuestionMultipleError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    //  yield put(rateCardAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(createQuestionMultipleError(error));
    //yield put(rateCardAction({ viewAction: "" }));
  } 
}


function* createQuestionY_N ({ payload: data }) {
  try {
    const response = yield call(createQuestionURL, data);

    if (response && response.data.status === 1) {
      yield put(createQuestionYNSuccess());
     // yield put(rateCardAction({ viewAction: "" }));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(createQuestionYNError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
   //   yield put(rateCardAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(createQuestionYNError(error));
  //  yield put(rateCardAction({ viewAction: "" }));
  }
}


function* viewQuestions ({ payload: data }) {
  try {
    const response = yield call(viewMyQuestions, data);

    if (response && response.data.status === 1) {
      yield put(viewMyQuestionsSuccess(response.data.data));
     // yield put(rateCardAction({ viewAction: "" }));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(viewMyQuestionsError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
   //   yield put(rateCardAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(viewMyQuestionsError(error));
  //  yield put(rateCardAction({ viewAction: "" }));
  }
}

function* QuestionsSaga() {
  yield takeEvery(CREATE_QUESTION_Y_N, createQuestionY_N);
  yield takeEvery(CREATE_QUESTION_MULTIPLE, createQuestionMultiple);
  yield takeEvery(CREATE_QUESTION_SINGLE, createQuestionSingle);
  yield takeEvery(CREATE_JOB_QUESTION, createJobQuestion);
  yield takeEvery(CREATE_QUESTION, createQuestions);
  yield takeEvery(UNLINK_JOB_QUESTION, unlinkQuestion);
  yield takeEvery(LINK_JOB_QUESTION, linkQuestion);
  yield takeEvery(VIEW_MY_QUESTIONS, viewQuestions);
 
}

export default QuestionsSaga;