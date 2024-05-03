import { useState } from 'react'
import List from './components/List';
import Details from './components/Details';
import { User } from './typesApp';
import './App.css'


const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="container">
      <List onUserSelect={setSelectedUser} />
      {selectedUser && <Details info={selectedUser} />}
    </div>
  );
};

export default App
