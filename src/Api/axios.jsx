import axios from "axios";
import { BASE_URL } from "../Utils/const";

const axioxInstance = axios.create({ baseURL: BASE_URL });

export const getDataUsingAxios = async () => {
  const response = await axioxInstance
    .request({
      method: "GET",
      url: "/todos",
    })
    .catch((e) => e);
  return response.data;
};
