import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import {
  CATEGORY,
  CREATE_CATEGORY,
  CREATE_INDUSTRY,
  INDUSTRY,
  UPDATE_CATEGORY,
  UPDATE_INDUSTRY,
} from "./actionTypes";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  categoryError,
  categorySuccess,
  createIndustryError,
  createIndustrySuccess,
  createcategoryError,
  createcategorySuccess,
  industry,
  industryError,
  industrySuccess,
  updateCategorySuccess,
  updateIndustryError,
  updateIndustrySuccess,
  category as categoryAction
} from "./action";
import {
  categoryURL,
  createCategoryURL,
  createIndustryURL,
  industryURL,
  updateCategoryURL,
  updateIndustryURL,
} from "../../helpers/fakebackend_helper";

const Nav = (location) => {
  let navigate = useNavigate();
  navigate(`${location}`);
};

//official
function* Industry({ payload: data }) {
  try {
    const response = yield call(industryURL, data);
    console.log(response);
    if (response && response?.data?.status === 1) {
      yield put(industrySuccess(response?.data?.data));
      // toast.success(`${response?.data?.message}`, {
      //   autoClose: 3000,
      // });
    } else {
      yield put(industryError(response));
      // toast.success(`${response?.data?.message}`, {
      //   autoClose: 3000,
      // });
    }
  } catch (error) {
    console.log(error);
    yield put(industryError(error));
  }
}

function* updateIndustry({ payload: data }) {
  try {
    const response = yield call(updateIndustryURL, data);

    if (response && response?.status === 1) {
      yield put(updateIndustrySuccess());
      yield put(industry({ viewAction: "" }));
      toast.success(`${response?.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(updateIndustryError(response));
      toast.success(`${response?.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(updateIndustryError(error));
  }
}

function* createIndustry({ payload: data }) {
  try {
    const response = yield call(createIndustryURL, data);

    if (response && response?.status === 1) {
      yield put(industry({ viewAction: "" }));
      yield put(createIndustrySuccess());
      toast.success(`${response?.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(createIndustryError(response));
      toast.success(`${response?.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(createIndustryError(error));
  }
}

function* category({ payload: data }) {
  try {
    const response = yield call(categoryURL, data);
    console.log(response);
    if (response && response?.data?.status === 1) {
      yield put(categorySuccess(response?.data?.data));
      // toast.success(`${response?.data?.message}`, {
      //   autoClose: 3000,
      // });
    } else {
      yield put(categoryError(response));
      // toast.success(`${response?.data?.message}`, {
      //   autoClose: 3000,
      // });
    }
  } catch (error) {
    console.log(error);
    yield put(categoryError(error));
  }
}

function* updateCategory({ payload: data }) {
  try {
    const response = yield call(updateCategoryURL, data);

    if (response && response?.status === 1) {
      yield put(updateCategorySuccess());
      yield put(categorySuccess({ viewAction: "" }));
      toast.success(`${response?.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(updateCategorySuccess(response));
      toast.success(`${response?.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(updateIndustryError(error));
  }
}

function* createCategory({ payload: data }) {
  try {
    const response = yield call(createCategoryURL, data);
console.log(response)
    if (response && response?.status === 1) {
      yield put(categoryAction({ viewAction: "" }));
      yield put(createcategorySuccess())
      toast.success(`${response?.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(createcategoryError(response));
      toast.success(`${response?.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(createcategoryError(error));
  }
}

function* IndustrySaga() {
  // yield takeEvery(LOGIN_USER, loginUser);
  // yield takeLatest(SOCIAL_LOGIN, socialLogin);
  // yield takeEvery(LOGOUT_USER, logoutUser);
  // yield takeEvery(LOGIN_USER, testLoginUser);
  // yield takeEvery(TEST_VERIFY, testVerifyUser)
  yield takeEvery(INDUSTRY, Industry);
  yield takeEvery(UPDATE_INDUSTRY, updateIndustry);
  yield takeEvery(CREATE_INDUSTRY, createIndustry);
  yield takeEvery(CATEGORY, category);
  yield takeEvery(UPDATE_CATEGORY, updateCategory);
  yield takeEvery(CREATE_CATEGORY, createCategory);
  //yield takeEvery(UPDATE_PROFILE, updateProfile);
}

export default IndustrySaga;
