/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";
import {
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useDispatch } from "react-redux";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.auth)
  const { axiosWithToken, axiosPublic } = useAxios();
  const login = async (formValues) => {
    try {
      const { data } = await axiosPublic.post("/auth/login", formValues);
      dispatch(loginSuccess(data));
      navigate("/");
      toastSuccessNotify("Login Successful");
    } catch (error) {
      toastErrorNotify("Login Failed");
    }
  };
  const register = async (formValues) => {
    try {
      await axiosWithToken.post("/personnels", formValues);
      // console.log("data :>> ", data);
      // dispatch(registerSuccess(data));
      toastSuccessNotify("Register Successful");
      navigate("/");
    } catch (error) {
      toastErrorNotify("Register Failed");
    }
  };
  const logout = async () => {
    try {
      await axiosWithToken.get("/auth/logout");
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout Successful");
    } catch (error) {
      toastErrorNotify("Logout Failed");
    }
  };

  return { login, logout, register };
};

export default useAuthCalls;
