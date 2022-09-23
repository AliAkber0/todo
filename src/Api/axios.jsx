import axios from "axios";
import { BASE_URL } from "../Utils/const";

const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getUsersData = async () => {
  const response = await axiosInstance
    .request({
      method: "GET",
      url: "/users",
    })
    .catch((e) => e);
  return response;
};

export const addUserData = async (name) => {
  const response = await axiosInstance
    .request({
      method: "POST",
      url: "/users",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      data: {
        name,
      },
    })
    .catch((e) => e);
  return [200, 201].includes(response?.status)
    ? response.data
    : { message: response?.message || "Error in adding user" };
};

export const deleteUser = async (id) => {
  const response = await axiosInstance
    .request({
      method: "DELETE",
      url: `/users/${id}`,
    })
    .catch((e) => e);
  return response;
};

export const editUserData = async (name, id) => {
  const response = await axiosInstance
    .request({
      method: "PATCH",
      url: `/users/${id}`,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      data: {
        name,
      },
    })
    .catch((e) => e);

  return [200, 201].includes(response.status)
    ? response.data
    : { message: response.message };
};
