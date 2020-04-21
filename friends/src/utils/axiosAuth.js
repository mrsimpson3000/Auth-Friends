import axios from "axios";

export const axiosWithAuth = () => {
  const tokan = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: tokan,
    },
  });
};
