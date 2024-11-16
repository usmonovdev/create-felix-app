import { AxiosRequestConfig, AxiosResponse } from "axios";
import { axiosInstance } from "../host";

export const HttpRequest = (
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<any>> => {
  return axiosInstance(config);
};
