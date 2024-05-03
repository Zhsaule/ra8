import useJsonFetch from './useJsonFetch';

interface Data {
  id: number;
  name: string;
}

const opts = { method: 'GET' }

const DataComponent = () => {
  const [data, loading, error] = useJsonFetch<Data>({ url: 'http://localhost:7070/data', opts});

  return (
    <div>DataComponent:
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
};

export default DataComponent;
