import { AxiosResponse } from "axios";
import { ToastOptions, toast } from "react-toastify";
import { instance } from "./axios";

interface PostApiResponse extends AxiosResponse {
  message?: string;
  success?: boolean;
  // data: any;
}

interface PutApiProps {
  apiRoute: string;
  params?: any;
}

export const routePostApi = async (
  apiRoute: string,
  params: any
): Promise<PostApiResponse> => {
  try {
    const response = await instance.post(apiRoute, params);
    if (response.data.message) {
      // toastContainer(response.status, "Success");
    }
    return { ...response, success: true };
  } catch (error) {
    if (error?.response?.status && error?.response?.data?.message) {
      toastContainer(error.response.status, error.response.data.message);
    } else {
      toast("Server error, please try again");
    }
    return error?.response?.data;
  }
};

export const routeGetApi = async (apiRoute: string) => {
  try {
    const response = await instance.get(apiRoute);
    return { ...response, success: true };
  } catch (error) {
    if (error?.response?.status && error?.response?.data?.message) {
      toastContainer(error.response.status, error.response.data.message);
    } else {
      toast("Server error, please try again");
    }
    return error?.response?.data;
  }
};

export const routeUpdateApi = async (apiRoute: string, params: any) => {
  try {
    const response = await instance.put(apiRoute, params);
    if (response.data.message) {
      // toastContainer(response.status, response.data.message);
    }
    return { ...response, success: true };
  } catch (error) {
    if (error?.response?.status && error?.response?.data?.message) {
      toastContainer(error.response.status, error.response.data.message);
    } else {
      toast("Server error, please try again");
    }
  }
};

export const routeDeleteApi = async (apiRoute: string) => {
  try {
    const response = await instance.delete(apiRoute);
    if (response.data.message) {
      // toastContainer(response.status, response.data.message);
    }
    return { ...response, success: true };
  } catch (error) {
    if (error?.response?.status && error?.response?.data?.message) {
      toastContainer(error.response.status, error.response.data.message);
    } else {
      toast("Server error, please try again");
    }
  }
};

const toastContainer = (status, message) => {
  let errMessage = "Server error, please try again";
  let action = "success";

  const toastParams: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  switch (status) {
    case 200:
      errMessage = message;
      action = "success";
      break;
    case 201:
      errMessage = message;
      action = "success";
      break;
    case 422:
      errMessage = message;
      action = "error";
      break;
    case 401:
      errMessage = message;
      action = "error";
      break;
    case 403:
      errMessage = message;
      action = "error";
      break;
    default:
      errMessage = "Server error, please try again";
      action = "error";
      break;
  }
  if (action === "success") {
    toast.success(errMessage, toastParams);
  } else {
    if (status === 403) {
      // jwt expired
      return;
      // localStorage.removeItem("auth-token");
    }
    if (status == 401) {
      // no auth token
      return;
    }
    toast.error(errMessage, toastParams);
  }
};
