import axios from "axios";
import {
  FAILURE,
  FORGOTPASS_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  REQUEST,
  RESETPASS_SUCCESS,
} from "./ActionTypes";

const LoginUser = (obj) => async (dispatch) => {
  dispatch({ type: REQUEST });

  try {
    const response = await axios.post(`http://localhost:8080/users/login`, obj);

    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    dispatch({ type: FAILURE });

    throw error;
  }
};

const RegisterUser = (obj) => async (dispatch) => {
  dispatch({ type: REQUEST });
  //   console.log("request from RegisterUser line 26");

  try {
    const response = await axios.post(
      `http://localhost:8080/users/register`,
      obj
    );
    // console.log("request from RegisterUser line 33");

    dispatch({ type: REGISTER_SUCCESS });
    console.log(response.data);
    return response.data;
  } catch (error) {
    dispatch({ type: FAILURE });
    // console.log("error on the RegisterUser line 40", error);
    console.log(error);
    throw error;
    // Uncomment this line to re-throw the error for further handling
  }
};
const forgotLink = (obj) => async (dispatch) => {
  dispatch({ type: REQUEST });
  //   console.log("request from RegisterUser line 26");

  try {
    const response = await axios.post(
      `http://localhost:8080/users/forgotpass`,
      obj
    );

    dispatch({ type: FORGOTPASS_SUCCESS });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    dispatch({ type: FAILURE });
    // console.log("error on the RegisterUser line 40", error);
    console.log(error);
    throw error;
    // Uncomment this line to re-throw the error for further handling
  }
};
const ResetPass = (data) => async (dispatch) => {
  dispatch({ type: REQUEST });
  //   console.log("request from RegisterUser line 26");

  try {
    const response = await axios.post(
      `http://localhost:8080/users/reset_password/${data.token}`,
      data.value
    );

    dispatch({ type: RESETPASS_SUCCESS });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    dispatch({ type: FAILURE });
    // console.log("error on the RegisterUser line 40", error);
    console.log(error);
    throw error;
    // Uncomment this line to re-throw the error for further handling
  }
};
const Logout = (data) => async (dispatch) => {
  dispatch({ type: REQUEST });

  try {
    // const response = await axios.post(
    //   `http://localhost:8080/users/reset_password/${data.token}`,
    //   data.value
    // );

    dispatch({ type: LOGOUT });
    // console.log(response.data);
  } catch (error) {
    dispatch({ type: FAILURE });

    console.log(error);
    throw error;
  }
};

export { LoginUser, RegisterUser, forgotLink, ResetPass, Logout };
