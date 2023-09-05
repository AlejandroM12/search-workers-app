import useRandomUsers from '../../hooks/useRandomUsers';
import { Card } from '../Card';
import { useDispatch } from 'react-redux';
import { addValue } from '../../store/slice';

const ListUsers = () => {
  const { users, loading, error, handleSearch } = useRandomUsers();

  const dispatch = useDispatch();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSave = (value, index) => {
    const newValue = { ...value, departaments: '' };
    dispatch(addValue(newValue));
    handleSearch(index);
  };
  return (
    <>
      <div className='card'>
        {users.map((user, index) => (
          <Card
            user={user}
            key={user.id.value || index}
            handleSearch={handleSearch}
            index={index}
            handleSave={handleSave}
            value={user}
          />
        ))}
        <hr />
      </div>
    </>
  );
};

export default ListUsers;
