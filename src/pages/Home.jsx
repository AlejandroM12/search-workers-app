import { ListUsers } from '../components';
import Main from '../layout/Main';

const Home = () => {
  return (
    <>
      <div className='title'>
        <h2>Find your candidate: </h2>
      </div>
      <Main>
        <ListUsers />
      </Main>
    </>
  );
};

export default Home;
