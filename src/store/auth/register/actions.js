import {
  REGISTER_USER,
  REGISTER_USER_SUCCESSFUL,
  REGISTER_USER_FAILED,
  RESET_REGISTER_FLAG,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  ACTIVATE_USER,
  ACTIVATE_USER_SUCCESS,
  ACTIVATE_USER_ERROR,
  REDIRECT_TO_ROUTE,
  RESEND_ACTIVATION_CODE,
  RESEND_ACTIVATION_CODE_ERROR,
  RESEND_ACTIVATION_CODE_SUCCESS
} from "./actionTypes"

export const registerUser = user => {
  return {
    type: REGISTER_USER,
    payload: { user },
  }
}

export const registerUserSuccessful = user => {
  return {
    type: REGISTER_USER_SUCCESSFUL,
    payload: user,
  }
}

export const registerUserFailed = user => {
  return {
    type: REGISTER_USER_FAILED,
    payload: user,
  }
}

export const resetRegisterFlag = () => {
  return {
    type: RESET_REGISTER_FLAG,
  }
}


export const signUp = (data) =>({
  type: SIGN_UP, 
  payload: data
})
export const signUpSuccess = (data) =>({
  type: SIGN_UP_SUCCESS, 
  payload: data
})
export const signUpError = (data) =>({
  type: SIGN_UP_ERROR, 
  payload: data
})

export const activateUser = (data) =>({
  type: ACTIVATE_USER, 
  payload: data
})

export const activateUserSuccess = (data) =>({
  type: ACTIVATE_USER_SUCCESS, 
  payload: data
})
export const activateUserError = (data) =>({
  type: ACTIVATE_USER_ERROR, 
  payload: data
})

export function redirectToRoute(route) {
  return {
    type: REDIRECT_TO_ROUTE,
    payload: route,
  };
}

export const resendActivationCode = (data) =>({
  type: RESEND_ACTIVATION_CODE, 
  payload: data
})
export const resendActivationCodeSuccess = (data) =>({
  type: RESEND_ACTIVATION_CODE_SUCCESS, 
  payload: data
})

export function resendActivationCodeError(data) {
  return {
    type: RESEND_ACTIVATION_CODE_ERROR,
    payload: data,
  };
}
