// actions.js
import {
    SAVE_FEEDS,
    SAVE_FEEDS_ERROR,
    SAVE_FEEDS_SUCCESS,
    APPROVE_FEEDS,
    APPROVE_FEEDS_ERROR,
    APPROVE_FEEDS_SUCCESS,
    MY_FEEDS,
    MY_FEEDS_ERROR,
    MY_FEEDS_SUCCESS,
    FEEDS,
    FEEDS_ERROR,
    FEEDS_SUCCESS,
    UPDATE_FEEDS,
    UPDATE_FEEDS_ERROR,
    UPDATE_FEEDS_SUCCESS,
    UPDATE_USER_FEEDS_SUCCESS,
    UPDATE_USER_FEEDS_ERROR,
    UPDATE_USER_FEEDS,
    SAVE_USER_FEED_ERROR,
    SAVE_USER_FEED_SUCCESS,
    SAVE_USER_FEED,
    VIEW_SINGLE_MANUAL_FEED,
    VIEW_SINGLE_MANUAL_FEED_SUCCESS,
    VIEW_SINGLE_MANUAL_FEED_ERROR,
    FETCH_NEWS, 
    FETCH_NEWS_ERROR, 
    FETCH_NEWS_SUCCESS
  } from './actionTypes';
  
  

  export const saveFeeds = (data) =>({
   type: SAVE_FEEDS,
   payload: data
  })
  export const saveFeedsSuccess = (data) =>({
   type: SAVE_FEEDS_SUCCESS, 
   payload: data
  })
  export const saveFeedsError = (data) =>({
    type: SAVE_FEEDS_ERROR, 
    payload: data
  })
  export const saveUserFeeds = (data) =>({
   type: SAVE_USER_FEED,
   payload: data
  })
  export const saveUserFeedsSuccess = (data) =>({
   type: SAVE_USER_FEED_SUCCESS, 
   payload: data
  })
  export const saveUserFeedsError = (data) =>({
    type: SAVE_USER_FEED_ERROR, 
    payload: data
  })

  export const approveFeeds = (data) =>({
   type: APPROVE_FEEDS,
   payload: data
  })
  export const approveFeedsSuccess = (data) =>({
   type: APPROVE_FEEDS_SUCCESS, 
   payload: data
  })
  export const approveFeedsError = (data) =>({
    type: APPROVE_FEEDS_ERROR, 
    payload: data
  })

  export const Feeds = (data) =>({
   type: FEEDS,
   payload: data
  })
  export const FeedsSuccess = (data) =>({
   type: FEEDS_SUCCESS, 
   payload: data
  })
  export const FeedsError = (data) =>({
    type: FEEDS_ERROR, 
    payload: data
  })
  export const fetchNews = (data) =>({
   type: FETCH_NEWS,
   payload: data
  })
  export const fetchNewsSuccess = (data) =>({
   type: FETCH_NEWS_SUCCESS, 
   payload: data
  })
  export const fetchNewsError = (data) =>({
    type: FETCH_NEWS_ERROR, 
    payload: data
  })

  export const userFeeds = (data) =>({
   type: MY_FEEDS,
   payload: data
  })
  export const userFeedsSuccess = (data) =>({
   type: MY_FEEDS_SUCCESS, 
   payload: data
  })
  export const userFeedsError = (data) =>({
    type: MY_FEEDS_ERROR, 
    payload: data
  })

  export const updateFeeds = (data) =>({
   type: UPDATE_FEEDS,
   payload: data
  })
  export const updateFeedsSuccess = (data) =>({
   type: UPDATE_FEEDS_SUCCESS, 
   payload: data
  })
  export const updateFeedsError = (data) =>({
    type: UPDATE_FEEDS_ERROR, 
    payload: data
  })

  export const updateUserFeeds = (data) =>({
   type: UPDATE_USER_FEEDS,
   payload: data
  })
  export const updateUserFeedsSuccess = (data) =>({
   type: UPDATE_USER_FEEDS_SUCCESS, 
   payload: data
  })
  export const updateUserFeedsError = (data) =>({
    type: UPDATE_USER_FEEDS_ERROR, 
    payload: data
  })

  export const viewSingleManualFeed = (data) => ({
    type: VIEW_SINGLE_MANUAL_FEED,
    payload: data
  })
  export const viewSingleManualFeedSuccess = (data) => ({
    type: VIEW_SINGLE_MANUAL_FEED_SUCCESS,
    payload: data
  })
  export const viewSingleManualFeedError = (data) => ({
    type: VIEW_SINGLE_MANUAL_FEED_ERROR,
    payload: data
  })