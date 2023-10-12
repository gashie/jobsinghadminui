import { call, put, takeEvery } from "redux-saga/effects";
import {
  APPROVE_FEEDS,
  CREATE_RATE_CARD,
  FEEDS,
  FETCH_NEWS,
  MY_FEEDS,
  SAVE_FEEDS,
  SAVE_USER_FEED,
  UPDATE_FEEDS,
  UPDATE_USER_FEEDS,
  VIEW_SINGLE_MANUAL_FEED,
} from "./actionTypes";

import {
  approveFeedsSuccess,
  approveFeedsError,
  
 
  
  saveFeedsSuccess,
  saveFeedsError,
  updateFeedsSuccess,
  updateFeedsError,
  
  updateUserFeedsSuccess,
  updateUserFeedsError,
 Feeds as feedsAction, 
 userFeeds as userFeedAction,
  userFeedsError,
  userFeedsSuccess,
  FeedsError,
  FeedsSuccess,
  saveUserFeedsSuccess,
  saveUserFeedsError,
  viewSingleManualFeedSuccess,
  viewSingleManualFeedError,
  viewSingleManualFeed,
  fetchNewsSuccess,
  fetchNewsError,
} from "./action";

import {
  approveFeedsURL,
 
  feedsURL,
  fetchNewsURL,
  saveFeedsURL,
  saveUserFeedsURL,
  updateFeedsURL,
  updateUserFeedURL,
} from "../../helpers/fakebackend_helper"; 
import { myfeedsURL } from "../../helpers/fakebackend_helper";

function* saveFeed({ payload: data }) {
  try {
    const response = yield call(saveFeedsURL, data); 
    if (response?.status === 1) {
      yield put(saveFeedsSuccess(response?.data));
      yield put (feedsAction({viewAction: ""}))
    } else {
      yield put(saveFeedsError(response));
      yield put (feedsAction({viewAction: ""}))
    }
  } catch (error) {
    yield put(saveFeedsError(error));
    yield put (feedsAction({viewAction: ""}))
  }
}
function* saveUserFeed({ payload: data }) {
  try {
    const response = yield call(saveUserFeedsURL, data); 
    if (response?.status === 1) {
      yield put(saveUserFeedsSuccess(response?.data));
      yield put (feedsAction({viewAction: ""}))
    } else {
      yield put(saveFeedsError(response));
      yield put (feedsAction({viewAction: ""}))
    }
  } catch (error) {
    yield put(saveFeedsError(error));
    yield put (feedsAction({viewAction: ""}))
  }
}

function* updateRssFeed({ payload: data }) {
  try {
    const response = yield call(updateFeedsURL, data);
    if (response?.status === 1) {
      yield put(updateFeedsSuccess());
      yield put (feedsAction({viewAction: ""}))
    } else {
      yield put(updateFeedsError(response?.message));
      yield put (feedsAction({viewAction: ""}))
    }
  } catch (error) {
    yield put(updateFeedsError(error));
    yield put (feedsAction({viewAction: ""}))
  }
}


function* updateUserFeed({ payload: data }) {
  try {
    const response = yield call(updateUserFeedURL, data);
    console.log(response)
    if (response?.status === 1) {
      yield put(updateUserFeedsSuccess());
      yield put (userFeedAction({viewAction: ""}))
    } else {
      yield put(updateUserFeedsError(response?.message));
      yield put (userFeedAction({viewAction: ""}))
    }
  } catch (error) {
    yield put(updateUserFeedsError(error));
    yield put (userFeedAction({viewAction: ""}))
  }
}

function* approveFeed({ payload: data }) {
  try {
    const response = yield call(approveFeedsURL, data);
    if (response.status === 1) {
      yield put(approveFeedsSuccess());
      yield put (userFeedAction({viewAction: ""}))
    
    } else {
      yield put(approveFeedsError(response));
      yield put (userFeedAction({viewAction: ""}))
    
    }
  } catch (error) {
    yield put(approveFeedsError(error));
    yield put (userFeedAction({viewAction: ""}))
  
  }
}

function* feed({ payload: data }) {
  try {
    const response = yield call(feedsURL, data);
    if (response.data.status === 1) {
      yield put(FeedsSuccess(response?.data.data));
      
    } else {
      yield put(FeedsError(response.data.message));
    }
  } catch (error) {
    yield put(FeedsError(error));
  } 
}

function* fetchNews({ payload: data }) {
  try {
    const response = yield call(fetchNewsURL, data);
    if (response.data.status === 1) {
      yield put(fetchNewsSuccess(response?.data.data));
      
    } else {
      yield put(fetchNewsError(response.data.message));
    }
  } catch (error) {
    yield put(fetchNewsError(error));
  } 
}

function* myFeed({ payload: data }) {
  try {
    const response = yield call(myfeedsURL, data);
    if (response.status === 1) {
      yield put(userFeedsSuccess(response?.data));
    } else {
      yield put(userFeedsError(response?.message));
    }
  } catch (error) {
    yield put(userFeedsError(error));
  }
}

function* singleManualFeed({ payload: data }) {
  try {
    const response = yield call(myfeedsURL, data);
    if (response.status === 1) {
      yield put(viewSingleManualFeedSuccess(response?.data));
    } else {
      yield put(viewSingleManualFeedError(response?.message));
    }
  } catch (error) {
    yield put(viewSingleManualFeedError(error));
  }
}

function* FeedsSaga() {
  yield takeEvery(SAVE_FEEDS, saveFeed);
  yield takeEvery(UPDATE_FEEDS, updateRssFeed);
  yield takeEvery(APPROVE_FEEDS, approveFeed);
  yield takeEvery(UPDATE_USER_FEEDS, updateUserFeed);
  yield takeEvery(SAVE_USER_FEED, saveUserFeed);

  yield takeEvery(FEEDS, feed);
  yield takeEvery(FETCH_NEWS, fetchNews);
  yield takeEvery(MY_FEEDS, myFeed);
  yield takeEvery(VIEW_SINGLE_MANUAL_FEED, viewSingleManualFeed);
}

export default FeedsSaga;
