import { PAY } from "../../helpers/url_helper";
import {
    RATE_CARD,
    RATE_CARD_ERROR,
    RATE_CARD_SUCCESS,
    CREATE_RATE_CARD,
    CREATE_RATE_CARD_ERROR,
    CREATE_RATE_CARD_SUCCESS,
    UPDATE_RATE_CARD,
    UPDATE_RATE_CARD_ERROR,
    UPDATE_RATE_CARD_SUCCESS,
    APPROVE_RATE_CARD,
    APPROVE_RATE_CARD_ERROR,
    APPROVE_RATE_CARD_SUCCESS,
    PAY_SUCCESS,
    PAY_ERROR,
  } from "./actionTypes";
  
  export const rateCard = () => {
    return {
      type: RATE_CARD,
    };
  };
  export const rateCardError = (error) => {
    return {
      type: RATE_CARD_ERROR,
      payload: error,
    };
  };
  export const rateCardSuccess = (data) => {
    return {
      type: RATE_CARD_SUCCESS,
      payload: data,
    };
  };
  
  export const createRateCard = (data) => {
    return {
      type: CREATE_RATE_CARD,
      payload: data,
    };
  };
  export const createRateCardError = (error) => {
    return {
      type: CREATE_RATE_CARD_ERROR,
      payload: error,
    };
  };
  export const createRateCardSuccess = () => {
    return {
      type: CREATE_RATE_CARD_SUCCESS,
    };
  };
  
  export const updateRateCard = (data) => {
    return {
      type: UPDATE_RATE_CARD,
      payload: data,
    };
  };
  export const updateRateCardError = (error) => {
    return {
      type: UPDATE_RATE_CARD_ERROR,
      payload: error,
    };
  };
  export const updateRateCardSuccess = () => {
    return {
      type: UPDATE_RATE_CARD_SUCCESS,
    };
  };
  
  export const approveRateCard = (data) => {
    return {
      type: APPROVE_RATE_CARD,
      payload: data
    };
  };
  export const approveRateCardError = (error) => {
    return {
      type: APPROVE_RATE_CARD_ERROR,
      payload: error,
    };
  };
  export const approveRateCardSuccess = () => {
    return {
      type: APPROVE_RATE_CARD_SUCCESS,
    };
  };

  export const pay =(data)=>{
    return{
      type: PAY,
      payload: data
    }
  }
  export const paySuccess =(data)=>{
    return{
      type: PAY_SUCCESS, 
      payload: data
    }
  }
  export const payError =(data)=>{
    return{
      type: PAY_ERROR,
      payload: data
    }
  }
  