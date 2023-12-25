import axios from "axios";
import { QueryCache } from "react-query";

function errorHandler(error) {
  if (axios.isAxiosError(error)) {
    const { response } = error;

    switch (response?.status) {
      case 400: {
        alert(response?.data.detail);
        break;
      }

      case 401:
      case 403: {
        alert(response?.data.detail);
        break;
      }

      case 404:
      case 406:
      case 500: {
        if (response?.data?.message) {
          alert(response?.data.message);
        } else {
          alert("An unexpected error has occurred!");
        }

        break;
      }

      default:
       alert("Oops! Some error happened!");
        break;
    }
  }
}
export const ERROR_TYPE = {
  UNAUTHORIZED: 401,
  BAD_request: 400,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

export const FETCH_CONFIG = {
  queries: {
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: true,
    retry: 0,
    useErrorBoundary: (error) => {
      const cause = error?.cause;
      return cause === ERROR_TYPE.UNAUTHORIZED;
    },
  },
};

export const QUERY_CACHE = new QueryCache({
  onError: errorHandler,
});
