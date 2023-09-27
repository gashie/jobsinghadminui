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

export const resetCodeS = data => {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload: data,
  };
};

export const resetCodeE = data => {
  return {
    type: RESET_PASSWORD_ERROR,
    payload: data,
  };
}

export const changePasswords = (data) => {
  return {
    type: CHANGE_PASSWORD,
    payload: data,
  };
};

export const changePasswordS = data => {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: data,
  };
};

export const changePasswordE = data => {
  return {
    type: CHANGE_PASSWORD_ERROR,
    payload: data,
  };
};
