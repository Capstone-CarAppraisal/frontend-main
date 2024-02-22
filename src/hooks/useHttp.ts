import axios from "axios";
import { useState } from "react";

const useHttp = () => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<boolean>(false);
  const request = async (
    method: string,
    url: string,
    params?: any,
    data?: any,
    headers?: any
  ) => {
    try {
      const response = await axios({
        method,
        url: "http://localhost:8000" + url,
        params: params,
        data,
        headers: headers
          ? { ...headers, "Content-Type": "application/json" }
          : { "Content-Type": "application/json" },
      });
      setData(response.data);
      setError(false); // Reset error on successful request
      return response.data; // Return the response data for immediate use
    } catch (error) {
      setError(true);
      setData(null);
      throw new Error("Failed");
    } finally {
    }
  };
  return [request, data, error];
};
export default useHttp;
