import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import {
  APPROVE_COURSE,
  CATEGORY,
  COURSE,
  COURSE_CONTENT,
  COURSE_PARTNERSHIP,
  COURSE_SCHEDULE,
  CREATE_CATEGORY,
  CREATE_INDUSTRY,
  INDUSTRY,
  SAVE_COURSE,
  SAVE_COURSE_CONTENT,
  SAVE_COURSE_PARTNERSHIP,
  SAVE_COURSE_SCHEDULE,
  UPDATE_CATEGORY,
  UPDATE_COURSE,
  UPDATE_COURSE_CONTENT,
  UPDATE_COURSE_PARTNERSHIP,
  UPDATE_COURSE_SCHEDULE,
  UPDATE_INDUSTRY,
} from "./actionTypes";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  createIndustryError,
  courseSuccess,
  courseError,
  updateCourseSuccess,
  course as courseAction,
  updateCourseError,
  saveCourseSuccess,
  saveCourseError,
  approveCourseError,
  courseContentSuccess,
  courseContentError,
  courseScheduleSuccess,
  courseScheduleError,
  coursePartnershipSuccess,
  coursePartnershipError,
  updateCourseScheduleSuccess,
  updateCourseScheduleError,
  updateCourseContentSuccess,
  updateCourseContentError,
  saveCourseContentSuccess,
  saveCourseContentError,
  saveCoursePartnershipSuccess,
  saveCoursePartnershipError,
  saveCourseScheduleSuccess,
  saveCourseScheduleError,
} from "./action";
import {
  approveCourseURL,
  courseContentURL,
  coursePartnershipURL,
  courseScheduleURL,
  courseURL,
  saveCourseContetntURL,
  saveCoursePartnershipURL,
  saveCourseScheduleURL,
  saveCourseURL,
  updateCourseContentURL,
  updateCoursePartnershipURL,
  updateCourseScheduleURL,
  updateCourseURL,
} from "../../helpers/fakebackend_helper";

const Nav = (location) => {
  let navigate = useNavigate();
  navigate(`${location}`);
};

//official
function* course({ payload: data }) {
  try {
    const response = yield call(courseURL, data);
    console.log(response);
    if (response && response.data.status === 1) {
      yield put(courseSuccess(response.data.data));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(courseError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(courseError(error));
  }
}
function* courseContent({ payload: data }) {
  try {
    const response = yield call(courseContentURL, data);
    console.log(response);
    if (response && response.data.status === 1) {
      yield put(courseContentSuccess(response?.data.data));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(courseContentError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(courseContentError(error));
  }
}
function* courseSchedule({ payload: data }) {
  try {
    const response = yield call(courseScheduleURL, data);
    console.log(response);
    if (response && response.data.status === 1) {
      yield put(courseScheduleSuccess(response?.data.data));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(courseScheduleError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(courseScheduleError(error));
  }
}
function* coursePartnership({ payload: data }) {
  try {
    const response = yield call(coursePartnershipURL, data);
    console.log(response);
    if (response && response.data.status === 1) {
      yield put(coursePartnershipSuccess(response?.data.data));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(coursePartnershipError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.log(error);
    yield put(coursePartnershipError(error));
  }
}

function* updateCourse({ payload: data }) {
  try {
    const response = yield call(updateCourseURL, data);

    if (response && response.data.status === 1) {
      yield put(updateCourseSuccess());
      yield put(courseAction({ viewAction: "" }));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(updateCourseError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
      yield put(courseAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(updateCourseError(error));
    yield put(courseAction({ viewAction: "" }));
  }
}
function* updateCourseSchedule({ payload: data }) {
  try {
    const response = yield call(updateCourseScheduleURL, data);

    if (response && response.data.status === 1) {
      yield put(updateCourseScheduleSuccess());
      yield put(courseAction({ viewAction: "" }));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(updateCourseScheduleError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
      yield put(courseAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(updateCourseScheduleError(error));
    yield put(courseAction({ viewAction: "" }));
  }
}

function* updateCourseContent({ payload: data }) {
  try {
    const response = yield call(updateCourseContentURL, data);

    if (response && response.data.status === 1) {
      yield put(updateCourseContentSuccess());
      yield put(courseAction({ viewAction: "" }));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(updateCourseContentError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
      yield put(courseAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(updateCourseContentError(error));
    yield put(courseAction({ viewAction: "" }));
  }
}
function* updateCoursePartnership({ payload: data }) {
  try {
    const response = yield call(updateCoursePartnershipURL, data);

    if (response && response.data.status === 1) {
      yield put(updateCourseContentSuccess());
      yield put(courseAction({ viewAction: "" }));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(updateCourseContentError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
      yield put(courseAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(updateCourseContentError(error));
    yield put(courseAction({ viewAction: "" }));
  }
}

function* approveCourse({ payload: data }) {
  try {
    const response = yield call(approveCourseURL, data);

    if (response && response.data.status === 1) {
      yield put(courseAction({ viewAction: "" }));
      yield put(saveCourseSuccess());
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(approveCourseError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
         yield put(courseAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(approveCourseError(error));
    yield put(courseAction({ viewAction: "" }));
  }
}

function* saveCourse({ payload: data }) {
  try {
    const response = yield call(saveCourseURL, data);

    if (response && response.data.status === 1) {
      yield put(saveCourseSuccess());
      yield put(courseAction({ viewAction: "" }));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(saveCourseError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
      yield put(courseAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(saveCourseError(error));
    yield put(courseAction({ viewAction: "" }));
  }
}
function* saveCourseContent({ payload: data }) {
  try {
    const response = yield call(saveCourseContetntURL, data);

    if (response && response.data.status === 1) {
      yield put(saveCourseContentSuccess());
      yield put(courseAction({ viewAction: "" }));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(saveCourseContentError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
      yield put(courseAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(saveCourseContentError(error));
    yield put(courseAction({ viewAction: "" }));
  }
}
function* saveCoursePartnership({ payload: data }) {
  try {
    const response = yield call(saveCoursePartnershipURL, data);

    if (response && response.data.status === 1) {
      yield put(saveCoursePartnershipSuccess());
      yield put(courseAction({ viewAction: "" }));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(saveCoursePartnershipError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
      yield put(courseAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(saveCoursePartnershipError(error));
    yield put(courseAction({ viewAction: "" }));
  }
}
function* saveCourseSchedule({ payload: data }) {
  try {
    const response = yield call(saveCourseScheduleURL, data);

    if (response && response.data.status === 1) {
      yield put(saveCourseScheduleSuccess());
      yield put(courseAction({ viewAction: "" }));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
    } else {
      yield put(saveCourseScheduleError(response));
      toast.success(`${response.data.message}`, {
        autoClose: 3000,
      });
      yield put(courseAction({ viewAction: "" }));
    }
  } catch (error) {
    console.log(error);
    yield put(saveCourseScheduleError(error));
    yield put(courseAction({ viewAction: "" }));
  }
}

function* CoursesSaga() {
  yield takeEvery(COURSE, course);
  yield takeEvery(COURSE_CONTENT, courseContent);
  yield takeEvery(COURSE_SCHEDULE, courseSchedule);
  yield takeEvery(COURSE_PARTNERSHIP, coursePartnership);

  yield takeEvery(APPROVE_COURSE, approveCourse);

  yield takeEvery(UPDATE_COURSE, updateCourse);
  yield takeEvery(UPDATE_COURSE_CONTENT, updateCourseContent);
  yield takeEvery(UPDATE_COURSE_SCHEDULE, updateCourseSchedule);
  yield takeEvery(UPDATE_COURSE_PARTNERSHIP, updateCoursePartnership);

  yield takeEvery(SAVE_COURSE, saveCourse);
  yield takeEvery(SAVE_COURSE_CONTENT, saveCourseContent);
  yield takeEvery(SAVE_COURSE_PARTNERSHIP, saveCoursePartnership);
  yield takeEvery(SAVE_COURSE_SCHEDULE, saveCourseSchedule);
}

export default CoursesSaga;
