import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch<T = any>(url: string, headers?: any) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    axios
      .get(url, headers)
      .then((res) => {
        if (!isMounted) return;
        if (res.data?.success === true) {
          setData(res.data.data);
        } else {
          setError(res.data?.message || "Invalid response");
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(
          err.response?.data?.message || err.message || "Request failed",
        );
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}
