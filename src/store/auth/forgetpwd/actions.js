import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
} from "./actionTypes";

export const resetCode = (data) => {
  return {
    type: RESET_PASSWORD,
    payload: data,
  };
};

export const resetCodeSuccess = data => {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload: data,
  };
};

export const resetCodeError = data => {
  return {
    type: RESET_PASSWORD_ERROR,
    payload: data,
  };
}

export const changePassword = (data) => {
  return {
    type: CHANGE_PASSWORD,
    payload: data,
  };
};

export const changePasswordSuccess = data => {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: data,
  };
};

export const changePasswordError = data => {
  return {
    type: CHANGE_PASSWORD_ERROR,
    payload: data,
  };
};
