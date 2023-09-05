import PropTypes from 'prop-types';

const Card = ({ user, handleSearch, index, handleSave }) => {
  return (
    <div className='card__item'>
      <div className='card__image'>
        <img src={user.picture.large} alt=' user perfil' />
      </div>
      <div className='card__content'>
        <div className='card__title'>{user.name.title}</div>
        <p className='card__text'>
          {user.name.first} {user.name.last}
        </p>
        <p className='card__text'>
          Location: {user.location.city} {user.location.country}
        </p>
        <div>
          <a href='#' className='a__email'>
            {user.email}
          </a>
        </div>
        <div>
          <a href='#' className='a__phone'>
            {user.phone}
          </a>
        </div>
      </div>
      <div className='btn__container'>
        <button onClick={() => handleSearch(index)} className='btn hide'>
          Ocultar
        </button>
        <button onClick={() => handleSave(user, index)} className='btn save'>
          Guardar
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      title: PropTypes.string,
      first: PropTypes.string,
      last: PropTypes.string,
    }).isRequired,
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
    }).isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    picture: PropTypes.shape({
      large: PropTypes.string,
    }).isRequired,
  }).isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
