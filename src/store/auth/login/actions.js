import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  SOCIAL_LOGIN,
  RESET_LOGIN_FLAG, 
  TEST_VERIFY, 
  TEST_VERIFY_SUCCESS, 
  TEST_VERIFY_FAIL,
  GET_ME_SUCCESS,
  GET_ME_FAIL,
  GET_ME,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from "./actionTypes";


export const logoutUser = history => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  };
};

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  };
};

export const apiError = error => {
  return {
    type: API_ERROR,
    payload: error,
  };
};

export const socialLogin = (type, history) => {
  return {
    type: SOCIAL_LOGIN,
    payload: { type, history },
  };
};

export const resetLoginFlag = () => {
  return {
    type: RESET_LOGIN_FLAG,
  }
}

export const testVerify = () =>{
  return {
    type: TEST_VERIFY
  }
}


export const testVerifySuccess = (payload) =>{
  return {
    type: TEST_VERIFY_SUCCESS, 
    payload: payload
  }
}

export const testVerifyError = (error) => {
  return {
    type: TEST_VERIFY_FAIL, 
    payload: error
  }
}


//jobsinghana

export const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};


export const getMeSuccess = (data) => ({
  type: GET_ME_SUCCESS, 
  payload: data
})

export const getMeError = (error) => ({
  type: GET_ME_FAIL, 
  payload: error
})

export const getMe = () =>({
  type: GET_ME
})

export const updateProfile = (data) =>({
  type: UPDATE_PROFILE,
  payload: data
})

export const updateProfileSuccess = () =>({
  type: UPDATE_PROFILE_SUCCESS
})
export const updateProfileError = (error) =>({
  type: UPDATE_PROFILE_ERROR,
  payload: error
})

//logout 

export const logout = () => ({
  type: LOGOUT 
})

export const logoutSuccess = (data) =>({
  type: LOGOUT_SUCCESS, 
  payload: data
})

export const logoutError = (data) => ({
  type: LOGOUT_ERROR, 
  payload: data
})

