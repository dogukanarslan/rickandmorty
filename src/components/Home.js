import Sidebar from './Sidebar';
import Main from './Main';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Home;
