import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <ul className='navbar-items flexbox-col'>
        <li className='navbar-logo flexbox-left'>
          <Link to='/' className='navbar-item-inner flexbox'>
            <img src={logo} alt='logo' />
          </Link>
        </li>
        <li className='navbar-item flexbox-left'>
          <Link to='/' className='navbar-item-inner flexbox-left'>
            <div className='navbar-item-inner-icon-wrapper flexbox'>
              <ion-icon name='search-outline'></ion-icon>
            </div>
            <span className='link-text'>Home</span>
          </Link>
        </li>
        <li className='navbar-item flexbox-left'>
          <Link to='/management' className='navbar-item-inner flexbox-left'>
            <div className='navbar-item-inner-icon-wrapper flexbox'>
              <ion-icon name='home-outline'></ion-icon>
            </div>
            <span className='link-text'>Management</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
