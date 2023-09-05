import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { Navbar } from '../components';
import { Management, Home } from '../pages';

const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='management' element={<Management />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesApp;
