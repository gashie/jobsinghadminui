import {
  LOGIN_USER,
  LOGIN_SUCCESS,
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
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  UPDATE_PROFILE_IMAGE,
  UPDATE_PROFILE_IMAGE_SUCCESS,
  UPDATE_PROFILE_IMAGE_ERROR,
  UPDATE_LOGO,
  UPDATE_LOGO_ERROR,
  UPDATE_LOGO_SUCCESS,
  PASSWORD_CODE,
  PASSWORD_CODE_ERROR,
  PASSWORD_CODE_SUCCESS,
  CHANGE_PASS,
  CHANGE_PASS_ERROR,
  CHANGE_PASS_SUCCESS,
  VIEW_PROFILE,
  VIEW_PROFILE_SUCCESS,
  VIEW_PROFILE_ERROR,
} from "./actionTypes";

export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = (data) => ({
  type: LOGOUT_SUCCESS,
  payload: data,
});

export const logoutError = (data) => ({
  type: LOGOUT_ERROR,
  payload: data,
});

export const socialLogin = (type, history) => {
  return {
    type: SOCIAL_LOGIN,
    payload: { type, history },
  };
};

export const resetLoginFlag = () => {
  return {
    type: RESET_LOGIN_FLAG,
  };
};

export const testVerify = () => {
  return {
    type: TEST_VERIFY,
  };
};

export const testVerifySuccess = (payload) => {
  return {
    type: TEST_VERIFY_SUCCESS,
    payload: payload,
  };
};

export const testVerifyError = (error) => {
  return {
    type: TEST_VERIFY_FAIL,
    payload: error,
  };
};

//jobsinghana

export const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const getMeSuccess = (data) => ({
  type: GET_ME_SUCCESS,
  payload: data,
});

export const getMeError = (error) => ({
  type: GET_ME_FAIL,
  payload: error,
});

export const getMe = () => ({
  type: GET_ME,
});

export const updateProfile = (data) => ({
  type: UPDATE_PROFILE,
  payload: data,
});

export const updateProfileSuccess = () => ({
  type: UPDATE_PROFILE_SUCCESS,
});
export const updateProfileError = (error) => ({
  type: UPDATE_PROFILE_ERROR,
  payload: error,
});

export const changePassword = (data) => ({
  type: CHANGE_PASSWORD,
  payload: data,
});
export const changePasswordSuccess = (data) => ({
  type: CHANGE_PASSWORD_SUCCESS,
  payload: data,
});
export const changePasswordError = (data) => ({
  type: CHANGE_PASSWORD_FAIL,
  payload: data,
});

export const updateProfileImage = (data) => ({
  type: UPDATE_PROFILE_IMAGE,
  payload: data,
});
export const updateProfileImageSuccess = (data) => ({
  type: UPDATE_PROFILE_IMAGE_SUCCESS,
  payload: data,
});
export const updateProfileImageError = (data) => ({
  type: UPDATE_PROFILE_IMAGE_ERROR,
  payload: data,
});

export const updateLogo = (data) => ({
  type: UPDATE_LOGO,
  payload: data,
});
export const updateLogoError = (data) => ({
  type: UPDATE_LOGO_ERROR,
  payload: data,
});
export const updateLogoSuccess = (data) => ({
  type: UPDATE_LOGO_SUCCESS,
  payload: data,
});


export const passwordCodeActionSuccess = (data) => {
  return {
    type: PASSWORD_CODE_SUCCESS,
    payload: data,
  }}
export const passwordCodeAction = (data) => {
  return {
    type: PASSWORD_CODE,
    payload: data,
  }}

export const passwordCodeActionError = (data) => ({
  type: PASSWORD_CODE_ERROR,
  payload: data,
})



export const changePass = (data) => ({
  type: CHANGE_PASS,
  payload: data,
})
export const changePassSuccess = (data) => ({
  type: CHANGE_PASS_SUCCESS,
  payload: data,
})
export const changePassError = (data) => ({
  type: CHANGE_PASS_ERROR,
  payload: data,
})

export const viewProfile = (data) =>({
  type: VIEW_PROFILE, 
  payload: data
})
export const viewProfileSuccess = (data) =>({
  type: VIEW_PROFILE_SUCCESS, 
  payload: data
})
export const viewProfileError = (data) =>({
  type: VIEW_PROFILE_ERROR, 
  payload: data
})
