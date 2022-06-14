import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MOVIE_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

export type SuccessFunction = {
  (response: object): void;
};
export type FailedFunction = {
  (error: unknown): void;
};

export const axiosFetch =
  (request: AxiosRequestConfig) =>
  (success: SuccessFunction) =>
  (failed: FailedFunction) =>
  (dispatch: any) => {
    axiosInstance({
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      ...request,
    })
      .then(async (response: AxiosResponse) => {
        dispatch(success(response.data));
      })
      .catch((error: AxiosError) => {
        console.log(error);

        if (error.response) {
          dispatch(failed({ error: error?.response?.data }));
          return;
        }
        dispatch(failed({ error: error }));
      });
  };
