import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

export function useFetch<T = any>(url: string, headers?: any) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    // Merge provided headers with current language
    const requestHeaders = {
      ...(headers?.headers || {}),
      lang: i18n.language,
    };

    axios
      .get(url, { ...headers, headers: requestHeaders })
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
  }, [url, i18n.language]);

  return { data, loading, error };
}
