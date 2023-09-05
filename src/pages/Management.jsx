import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Worker } from '../components/Worker';
import { deleteValue, modifyValue } from '../store/slice';
import Main from '../layout/Main';

const Management = () => {
  const dispatch = useDispatch();
  const workersList = useSelector((state) => state.workers.workersArr);
  const handleUpdate = (continent, index) => {
    dispatch(
      modifyValue({
        index: index,
        newContinent: continent,
      })
    );
  };
  const handleDelete = (value) => {
    dispatch(
      deleteValue({
        name: value.name.first,
        lastName: value.name.last,
        phone: value.cell,
      })
    );
  };
  return (
    <>
      <div className='title'>
        <Link to='/'>
          <button>Candidates</button>
        </Link>
      </div>

      <Main>
        <div className='users'>
          {workersList.map((value, index) => (
            <Worker
              value={value}
              index={index}
              key={index}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </Main>
    </>
  );
};

export default Management;
