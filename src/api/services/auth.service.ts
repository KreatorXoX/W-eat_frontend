import { useAuthStore } from "../../context/useAuthStore";
import {
  RegisterUserInput,
  LoginUserInput,
  ForgotPasswordInput,
  ChangePasswordInput,
  ResetPasswordInput,
} from "../../utils/schema/auth.schema";
import axiosApi from "../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// register user
const registerUser = async (newUser: RegisterUserInput) => {
  const result = await axiosApi.post("/auth/register", {
    ...newUser,
  });
  return result.data;
};

const useRegister = () => {
  return useMutation({
    mutationFn: (newUser: RegisterUserInput) => registerUser(newUser),
    onError: (err: any) => {
      let errMsg;

      if (err.response) errMsg = err.response.data.message;
      else if (err.request) errMsg = err.request.message;
      else errMsg = err.message;

      console.log(errMsg);
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

const useLogin = () => {
  return useMutation({
    mutationFn: (credentials: LoginUserInput) => loginUser(credentials),
    onSuccess: (response) => {
      console.log(response.accessToken);
      // useAuthStore.getState().setCredentials(response.accessToken);
      useAuthStore.setState({ token: response.accessToken });
    },
    onError: (err: any) => {
      let errMsg;

      if (err.response) errMsg = err.response.data.message;
      else if (err.request) errMsg = err.request.message;
      else errMsg = err.message;

      console.log(errMsg);
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

// forgot password
const forgotPassword = async (data: ForgotPasswordInput) => {
  const response = await axiosApi.post("/auth/forgot-password", {
    ...data,
  });
  return response.data;
};

const useForgotPassword = () => {
  return useMutation({
    mutationFn: (email: ForgotPasswordInput) => forgotPassword(email),
  });
};

// change password

const changePassword = async (data: ChangePasswordInput & { id: string }) => {
  const response = await axiosApi.post("/auth/change-password", {
    ...data,
  });
  return response.data;
};

const useChangePassword = () => {
  return useMutation({
    mutationFn: (data: ChangePasswordInput & { id: string }) =>
      changePassword(data),
  });
};

// change password

const resetPassword = async (
  data: ResetPasswordInput,
  params: { id: string; resetCode: string }
) => {
  const response = await axiosApi.post(
    `/auth/reset-password/${params.id}/${params.resetCode}`,
    {
      ...data,
    }
  );
  return response.data;
};

const useResetPassword = () => {
  return useMutation({
    mutationFn: ({
      data,
      params,
    }: {
      data: ResetPasswordInput;
      params: { id: string; resetCode: string };
    }) => resetPassword(data, params),
  });
};

const AuthServices = {
  useLogin,
  useRegister,
  useLogout,
  useForgotPassword,
  useChangePassword,
  useResetPassword,
};
export default AuthServices;
