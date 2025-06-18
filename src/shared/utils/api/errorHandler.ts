import axios, { type AxiosError } from "axios";

interface ErrorResponseType {
   message: string;
}

export const apiErrorhandler = (error: unknown): string => {
   if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponseType>;
      return (
         axiosError.response?.data?.message ||
         axiosError.message ||
         "Unknown Axios error occurred"
      );
   }

   if (error instanceof Error) {
      return error.message;
   }

   return "An unknown error occurred";
};
