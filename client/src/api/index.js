import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" });
const url = "http://localhost:5000/discussion";
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchDoubt = (id) => axios.get(`${url}/${id}`);
export const fetchDoubts = () => axios.get(url);
export const createDoubt = (newDoubt) => axios.post(url, newDoubt);
export const updateDoubt = (id, updatedDoubt) => axios.patch(`${url}/${id}`, updatedDoubt);
export const comment = (value, id) => axios.post(`${url}/${id}/commentDoubt`, { value });
export const deleteDoubt = (id) => axios.delete(`${url}/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
