import {
  FAILURE,
  FORGOTPASS_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  REQUEST,
  RESETPASS_SUCCESS,
} from "./ActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  userInfo: {},
  role: "",
  token: "",
  refreshToken: "",
};
/**
 * 

          _id,
        first_Name,
        last_Name,
        email,
        phone_Number,
        date_of_birth
        token
        profile_Picture,
        gender
        account_Status
        role,
       
 */
export const reducer = (state = initialState, { type, payload }) => {
  // console.log("payload", payload);
  switch (type) {
    case REQUEST:
      return { ...state, isLoading: true };
    case FAILURE:
      return { ...state, isLoading: false, isError: true, isAuth: false };
    case REGISTER_SUCCESS:
      return { ...state, isLoading: false, isError: true, isAuth: false };
    case FORGOTPASS_SUCCESS:
      return { ...state, isLoading: false, isError: true, isAuth: false };
    case RESETPASS_SUCCESS:
      return { ...state, isLoading: false, isError: true, isAuth: false };
    case LOGOUT:
      return { ...initialState };
    case LOGIN_SUCCESS:
      const {
        _id,
        first_Name,
        last_Name,
        email,
        phone_Number,
        date_of_birth,
        profile_Picture,
        gender,
        account_Status,
        role,
      } = payload.user;
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        userInfo: {
          ...state.userInfo,
          id: _id,
          first_Name: first_Name,
          last_Name: last_Name,
          email: email,
          phone_Number: phone_Number,
          date_of_birth: date_of_birth,
          profile: profile_Picture,
          gender,
          account_Status,
        },
        role: role,
        token: payload.token,
        refreshToken: payload.rtoken,
      };
    default:
      return state;
  }
};
