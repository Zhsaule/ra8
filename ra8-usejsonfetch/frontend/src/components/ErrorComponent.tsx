import useJsonFetch from './useJsonFetch';

interface Data {
  id: number;
  name: string;
}

const opts = { method: 'GET' }

const ErrorComponent = () => {
  const [data, loading, error] = useJsonFetch<Data>({ url: 'http://localhost:7070/error', opts });

  return (
    <div>ErrorComponent:
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
};

export default ErrorComponent;
