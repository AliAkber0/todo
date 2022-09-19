import { BASE_URL } from "../Utils/const";
export const getDataUsingFetch = () => {
  const response = fetch(`${BASE_URL}/todos`)
    .then((res) => res.json())
    .catch((error) => error);
  return response;
};
