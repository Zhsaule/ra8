import { useState, useEffect } from 'react';

type UseJsonFetchArgs = {
  url: string;
  opts?: RequestInit;
};

type UseJsonFetchResult<T> = [T | null, boolean, Error | null];

function useJsonFetch<T = unknown>({ url, opts }: UseJsonFetchArgs): UseJsonFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
        } else {
          setError(new Error('An unknown error occurred'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [url, opts]);

  return [data, loading, error];
}

export default useJsonFetch;
