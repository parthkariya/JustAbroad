import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import auth_reducer from "../reducer/auth_reducer";
import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT,
  LOGOUT_BEGIN,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from "../Action";

import { ACCEPT_HEADER, login, logout } from "../utils/Constant";
import Notification from "../utils/Notification";
import { useNavigate } from "react-router-dom";

const initialState = {
  login_loading: false,
  login_data: "",
};

const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(auth_reducer, initialState);

  // Main Login
  const SetLogin = async (formdata) => {
    dispatch({ type: LOGIN_BEGIN });
    try {
      const response = await axios.post(login, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const logindata = response.data;
      if (logindata.success == 1) {
        dispatch({ type: LOGIN_SUCCESS, payload: logindata });
        localStorage.setItem("is_login", JSON.stringify(true));

        localStorage.setItem("is_token", JSON.stringify(logindata.token));
        localStorage.setItem("user_name", JSON.stringify(logindata.user.name));
        localStorage.setItem("navbartrue", JSON.stringify(false));
        localStorage.setItem("navbarcourse", JSON.stringify(false));
      } else {
        dispatch({ type: LOGIN_FAIL });

        Notification("error", "Error", logindata.message);
      }
      return response.data;
    } catch (error) {
      dispatch({ type: LOGIN_FAIL });
      localStorage.setItem("is_login", JSON.stringify(false));
      console.log("login error", error);
    }
  };

  // Main Sign Up

  const SignUp = async (formdata) => {
    dispatch({ type: SIGNUP_BEGIN });
    try {
      const response = await axios.post(login, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const logindata = response.data;
      if (logindata.success == 1) {
        dispatch({ type: SIGNUP_SUCCESS, payload: logindata });
      } else {
        Notification("error", "Error", logindata.message);
        dispatch({ type: SIGNUP_FAIL });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: SIGNUP_FAIL });
      localStorage.setItem("is_login", JSON.stringify(false));
      console.log("sign error", error);
    }
  };

  const SetLogout = async () => {
    const Token = await localStorage.getItem("is_token");

    axios
      .get(logout, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        dispatch({ type: LOGOUT });
        if (res.data.success == 1) {
          Notification("success", "Success!", res.data.message);
          localStorage.clear();
        }
      })
      .catch((err) => {
        console.log("--->err", err);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        SetLogin,
        SetLogout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
