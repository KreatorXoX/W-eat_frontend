import { useAuthStore } from "../../context/useAuthStore";
import {
  RegisterUserInput,
  LoginUserInput,
} from "../../shared/utils/schema/auth.schema";
import axiosApi from "../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// register user
const registerUser = async (newUser: RegisterUserInput) => {
  const result = await axiosApi.post<IToken>("/auth/register", {
    ...newUser,
  });
  return result.data;
};

const useRegister = () => {
  return useMutation({
    mutationFn: (newUser: RegisterUserInput) => registerUser(newUser),
    onSuccess: (response) => {
      useAuthStore.getState().setCredentials(response.accessToken);
    },
  });
};

// login user
const loginUser = async (credentials: LoginUserInput) => {
  const result = await axiosApi.post<IToken>("/auth/login", {
    ...credentials,
  });
  return result.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (credentials: LoginUserInput) => loginUser(credentials),
    onSuccess: (response) => {
      console.log(response.accessToken);
      // useAuthStore.getState().setCredentials(response.accessToken);
      useAuthStore.setState({ token: response.accessToken });
    },
  });
};

// logout user
const logoutUser = async () => {
  const result = await axiosApi.post("/auth/logout");
  return result.data;
};

const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => logoutUser(),
    onSuccess: (response) => {
      useAuthStore.getState().logOut();
      queryClient.removeQueries();
    },
  });
};

const AuthServices = {
  useLogin,
  useRegister,
  useLogout,
};
export default AuthServices;
