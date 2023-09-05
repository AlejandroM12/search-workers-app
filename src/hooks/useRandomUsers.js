import { useState, useEffect } from 'react';
import { getRandomUser } from '../services/user';

const useRandomUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getRandomUser();
        setUsers(userData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  const handleSearch = (i) => {
    fetch('https://randomuser.me/api/?results=1')
      .then((response) => response.json())
      .then((data) => {
        const user = [...users];
        user[i] = { ...data.results[0] };
        setUsers(user);
      });
  };

  return { users, loading, error, handleSearch };
};

export default useRandomUsers;
