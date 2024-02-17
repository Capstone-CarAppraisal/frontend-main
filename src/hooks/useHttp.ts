import axios from "axios";
import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      const response = await axios({
        method,
        url: "http://localhost:8000" + url,
        params: params,
        data,
        headers: headers
          ? { ...headers, "Content-Type": "application/json" }
          : { "Content-Type": "application/json" },
      });
      setData(response);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };
  return [isLoading, request, data, error];
};
export default useHttp;
