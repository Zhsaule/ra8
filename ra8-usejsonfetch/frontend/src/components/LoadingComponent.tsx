import useJsonFetch from './useJsonFetch';

interface Data {
  id: number;
  name: string;
}

const opts = { method: 'GET' }

const LoadingComponent = () => {
  const [data, loading, error] = useJsonFetch<Data>({ url: 'http://localhost:7070/loading', opts });

  return (
    <div>LoadingComponent:
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
}

export default LoadingComponent;
