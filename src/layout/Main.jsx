import PropTypes from 'prop-types';

const Main = ({ children }) => {
  return (
    <main id='main' className='flexbox-col'>
      {children}
    </main>
  );
};

export default Main;
Main.propTypes = {
  children: PropTypes.node.isRequired,
};
