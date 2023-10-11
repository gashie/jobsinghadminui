import {
  FEEDS,
  FEEDS_SUCCESS,
  FEEDS_ERROR,
  SAVE_FEEDS,
  SAVE_FEEDS_SUCCESS,
  SAVE_FEEDS_ERROR,
  APPROVE_FEEDS,
  APPROVE_FEEDS_SUCCESS,
  APPROVE_FEEDS_ERROR,
  UPDATE_FEEDS,
  UPDATE_FEEDS_SUCCESS,
  UPDATE_FEEDS_ERROR,
  UPDATE_USER_FEEDS,
  UPDATE_USER_FEEDS_SUCCESS,
  UPDATE_USER_FEEDS_ERROR,
  MY_FEEDS,
  MY_FEEDS_SUCCESS,
  MY_FEEDS_ERROR,
  VIEW_SINGLE_MANUAL_FEED,
  VIEW_SINGLE_MANUAL_FEED_ERROR,
  VIEW_SINGLE_MANUAL_FEED_SUCCESS,
  FETCH_NEWS,
  FETCH_NEWS_ERROR,
  FETCH_NEWS_SUCCESS,
} from "./actionTypes";

const initialState = {
  feedLoading: false,
  feedError: false,
  feeds: [],
  errMssg: null,
  userFeedLoading: false,
  userFeedError: false,
  userFeed: [],
  singleManualFeed: "",
  singleManualFeedError: false,
  singleManualFeedLoading: false,
  fetchNewsLoading: false,
  fetchNewsError: false,
  fetchNewsInfo: null,
};

const feedsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEEDS:
      return {
        ...state,
        feedLoading: true,
        feedError: false,
        errMssg: null,
      };

    case FEEDS_SUCCESS:
      return {
        ...state,
        feedLoading: false,
        feedError: false,
        feeds: action.payload,
      };

    case FEEDS_ERROR:
      return {
        ...state,
        feedLoading: false,
        feedError: true,
        errMssg: action.payload,
      };
    case FETCH_NEWS:
      return {
        ...state,
        fetchNewsLoading: true,
        fetchNewsError: false,
      };

    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        fetchNewsLoading: false,
        fetchNewsError: false,
        fetchNewsInfo: action.payload,
      };

    case FETCH_NEWS_ERROR:
      return {
        ...state,
        fetchNewsLoading: false,
        fetchNewsError: true,
        fetchNewsInfo: action.payload,
      };
    case MY_FEEDS:
      return {
        ...state,
        userFeedLoading: true,
        userFeedError: false,
      };

    case MY_FEEDS_SUCCESS:
      return {
        ...state,
        userFeedLoading: false,
        userFeedError: false,
        userFeed: action.payload,
      };

    case MY_FEEDS_ERROR:
      return {
        ...state,
        userFeedLoading: false,
        userFeedError: true,
        errMssg: action.payload,
      };

    case SAVE_FEEDS:
      return {
        ...state,
        feedLoading: true,
        feedError: false,
        errMssg: null,
      };

    case SAVE_FEEDS_SUCCESS:
      // Handle the success of save feeds
      // Update state accordingly
      return {
        ...state,
        feedLoading: false,
        feedError: false,
        errMssg: null,
      };

    case SAVE_FEEDS_ERROR:
      // Handle the error for save feeds
      // Update state accordingly
      return {
        ...state,
        feedLoading: false,
        feedError: true,
        errMssg: action.payload,
      };

    case APPROVE_FEEDS:
      return {
        ...state,
        feedLoading: true,
        feedError: false,
        errMssg: null,
      };

    case APPROVE_FEEDS_SUCCESS:
      // Handle the success of approve feeds
      // Update state accordingly
      return {
        ...state,
        feedLoading: false,
        feedError: false,
        errMssg: null,
      };

    case APPROVE_FEEDS_ERROR:
      // Handle the error for approve feeds
      // Update state accordingly
      return {
        ...state,
        feedLoading: false,
        feedError: true,
        errMssg: action.payload,
      };

    case UPDATE_FEEDS:
      return {
        ...state,
        feedLoading: true,
        feedError: false,
        errMssg: null,
      };

    case UPDATE_FEEDS_SUCCESS:
      // Handle the success of update feeds
      // Update state accordingly
      return {
        ...state,
        feedLoading: false,
        feedError: false,
        errMssg: null,
      };

    case UPDATE_FEEDS_ERROR:
      // Handle the error for update feeds
      // Update state accordingly
      return {
        ...state,
        feedLoading: false,
        feedError: true,
        errMssg: action.payload,
      };

    case UPDATE_USER_FEEDS:
      return {
        ...state,
        userFeedLoading: true,
        userFeedError: false,
      };

    case UPDATE_USER_FEEDS_SUCCESS:
      // Handle the success of update user feeds
      // Update state accordingly
      return {
        ...state,
        userFeedLoading: false,
        userFeedError: false,
      };

    case UPDATE_USER_FEEDS_ERROR:
      // Handle the error for update user feeds
      // Update state accordingly
      return {
        ...state,
        userFeedLoading: false,
        userFeedError: true,
        errMssg: action.payload,
      };

    case VIEW_SINGLE_MANUAL_FEED:
      return {
        ...state,
        singleManualFeedLoading: true,
        singleManualFeedError: false,
      };
    case VIEW_SINGLE_MANUAL_FEED_ERROR:
      return {
        ...state,
        singleManualFeedError: true,
        singleManualFeedLoading: false,
        errMssg: action.payload,
      };
    case VIEW_SINGLE_MANUAL_FEED_SUCCESS:
      return {
        ...state,
        singleManualFeedLoading: false,
        singleManualFeedError: false,
        singleManualFeed: action.payload,
      };

    default:
      return state;
  }
};

export default feedsReducer;
