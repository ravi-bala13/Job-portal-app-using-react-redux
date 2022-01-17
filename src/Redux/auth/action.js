import {
  ADD_JOBS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "./actionTypes";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};
export const loginFaiure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err,
  };
};

export const addJobs = (data) => {
  return {
    type: ADD_JOBS,
    payload: data,
  };
};
