import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Worker = ({ value, index, handleUpdate, handleDelete }) => {
  const departamentsList = useSelector(
    (state) => state.departament.departaments
  );

  return (
    <div className='w-full sm:w-1/2 md:w-1/3 flex flex-col p-3'>
      <div className='bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col'>
        <div
          className='bg-cover h-48'
          style={{ backgroundImage: `url(${value.picture.large})` }}
        ></div>
        <div className='p-4 flex-1 flex flex-col'>
          <div className='mb-4'>
            <h3 className='text-2xl'>
              {value.name.last} {value.name.first}
            </h3>
          </div>
          <div className='mb-4 text-grey-darker text-sm flex-1'>
            <p>
              {value.location.city} ({value.location.country})
            </p>
          </div>
          <select
            value={value.departament}
            onChange={(e) => handleUpdate(e.target.value, index)}
            className='mb-4 w-full p-2 border rounded'
          >
            <option value=''>Choose:</option>
            {departamentsList.map((valueDep) => (
              <option key={valueDep}>{valueDep}</option>
            ))}
          </select>
          <button
            className='border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide w-full text-center p-2'
            onClick={() => handleDelete(value)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Worker;

Worker.propTypes = {
  value: PropTypes.shape({
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.shape({
      last: PropTypes.string.isRequired,
      first: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    departament: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
