import { HttpRequest } from ".";
import { axiosInstance } from "../host";

export const GET = (url: string, queryParams?: Record<string, any>) => {
  try {
    const response = axiosInstance.get(url, { params: queryParams });
    return response;
  } catch (error) {
    console.error("GET request error:", error);
    throw error;
  }
};
export const POST = (url: string, data: any) => {
  const config = {
    method: "POST" as const,
    url,
    data,
  };
  return HttpRequest(config);
};

export const DELETE = (url: string) => {
  const config = {
    method: "DELETE" as const,
    url,
  };
  return HttpRequest(config);
};

export const EDIT = (
  url: string,
  data: any,
  method: "PUT" | "PATCH" = "PUT"
): Promise<any> => {
  const config = {
    method,
    url,
    data,
  };
  return HttpRequest(config);
};
