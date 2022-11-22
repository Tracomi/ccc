import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosCoins = (param) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  var instance = axios.create({
    baseURL: "http://localhost:5000/api/",
  });

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const result = await instance(param);
      setResponse(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, []);

  return {
    response,
    loading,
    error,
  };
};

export default useAxiosCoins;
