import { useEffect, useState } from 'react';
import { User } from '../typesApp';

const List: React.FC<{ onUserSelect: (user: User) => void }> = ({ onUserSelect }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/users.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="details"><div className="spinner"></div>Loading...</div>;
  }

  return (
    <div className="list">
      {users.map(user => (
        <div className="item" key={user.id} onClick={() => onUserSelect(user)}>
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default List;