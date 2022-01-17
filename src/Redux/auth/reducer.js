import { ADD_JOBS, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const token = "";

const init = {
  token: token,
  isAuth: false,
  jobs: [],
  type: "",
};

export const reducer = (state = init, { type, payload }) => {
  console.log("stateda:", state);
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        token: payload.token,
        type: payload.type,
      };
    }
    case ADD_JOBS: {
      console.log("state.jobs:", state.jobs, payload);
      return {
        ...state,
        jobs: [...state.jobs, payload],
      };
    }

    default: {
      return state;
    }
  }
};
