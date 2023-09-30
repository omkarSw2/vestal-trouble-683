import axios from "axios";
import {
  FAILURE,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REQUEST,
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

export { LoginUser, RegisterUser };
