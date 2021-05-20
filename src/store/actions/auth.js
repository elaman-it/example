
import axios from "axios"
import { AUTH_SUCCESS, AUTH_FAIL, AUTH_START } from "./types";

export const success = (data) => ({
  type: AUTH_SUCCESS,
  id: data.localId,
  token: data.idToken
});

export const fail = (data) => ({
  type: AUTH_FAIL,
  error: data.error
});

export const start = () => ({
  type: AUTH_START
});

const key = "AIzaSyBmNRW4Dy30bYbbVl7kHd3d_HbPTh4o9R8";
export const auth = (method, email, password) => {
  const url = method === "signin"
    ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
    : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  const data = {
    email,
    password
  };

  return (dispatch) => axios.post(url + key, data)
    .then(({ data }) => {
      dispatch(success(data));
    })
    .catch(error => {
      dispatch(fail(error.response.data));
    });
}