import Sidebar from './Sidebar';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">Main</div>
      </div>
    </div>
  );
};

export default Home;
