import { useEffect, useState } from 'react';
import { DetailsProps, User } from '../typesApp';

const Details: React.FC<DetailsProps> = ({ info }) => {
  const [details, setDetails] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!info) return;
    console.log("Fetching data for ID:", info.id); // проверка props.info.id, на рендер
    setLoading(true);
    setError(null);
    fetch(`/data/${info.id}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch:', error);
        setError('Failed to load user details');
        setLoading(false);
      });
  }, [info]);

  if (!info) return <div className='details'>Select a user</div>;
  if (loading) return <div className='details'><div className="spinner"></div>Loading...</div>;
  if (error) return <div className='details'>Error: {error}</div>;

  return details ? (
    <div className="details">
      <img src={details.avatar} alt={details.name}/>
      <h2>{details.name}</h2>
      {details.details && (
        <>
          <p className='item'><strong>City:</strong> {details.details.city}</p>
          <p className='item'><strong>Company:</strong> {details.details.company}</p>
          <p className='item'><strong>Position:</strong> {details.details.position}</p>
        </>
      )}
    </div>
  ) : <div className='details'>No user details available.</div>;
}

export default Details;
