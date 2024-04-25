/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";
import {
  departmentSuccess,
  personnelSuccess,
} from "../features/personnelSlice";

import { useDispatch } from "react-redux";

const usePersonnelCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.auth)
  const { axiosWithToken, axiosPublic } = useAxios();
  const getDepartments = async () => {
    try {
      const { data } = await axiosPublic.get("/departments");
      //   console.log("data", data);
      dispatch(departmentSuccess(data.data));

      // toastSuccessNotify("Departments fetched Successful");
    } catch (error) {
      toastErrorNotify("Departments fetch Failed");
    }
  };
  const getPersonnels = async () => {
    try {
      const { data } = await axiosWithToken.get("/personnels");
      dispatch(personnelSuccess(data.data));
      // toastSuccessNotify("Personnels fetched Successful");
    } catch (error) {
      toastErrorNotify("Personnels fetch Failed");
    }
  };

  const personnelDelete = async (id) => {
    try {
      await axiosWithToken.delete(`/personnels/${id}`);
      toastSuccessNotify("Personnel Deleted Successful");
    } catch (error) {
      toastErrorNotify("Personnel Delete Failed");
    }
  };
  const updatePersonnel = async (id, data) => {
    try {
      await axiosWithToken.put(`/personnels/${id}`, data);
      toastSuccessNotify("Personnel Updated Successful");
    } catch (error) {
      toastErrorNotify("Personnel Update Failed");
    }
  };

  return { getDepartments, getPersonnels, personnelDelete, updatePersonnel };
};

export default usePersonnelCalls;
