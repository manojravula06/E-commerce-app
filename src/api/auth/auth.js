import { AxiosInstance } from "../../util/AxiosInstance";


export const signUp = async (user) => {
  const URL = "/auth/signup";

  try {
    const response = await AxiosInstance.post(URL, user);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const signIn = async (user) => {
  const URL = "auth/login";

  try {
    const response = await AxiosInstance.post(URL, user);
    console.log(response);
    const { username, email,id, token } = response.data;

    localStorage.setItem("username", username)
    localStorage.setItem("userId", id);
    localStorage.setItem("email", email)
    localStorage.setItem("token", token);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const signOut = () => {

  localStorage.removeItem('username');
  localStorage.removeItem('userId');
  localStorage.removeItem('token');
  localStorage.removeItem('cartId');
}
