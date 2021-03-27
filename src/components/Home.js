import { Switch, Route, Redirect } from 'react-router-dom';
import Character from '../pages/character/Character';
import Location from '../pages/location/Location';
import Episode from '../pages/episode/Episode';
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Switch>
            <Route path="/characters">
              <Character />
            </Route>
            <Route path="/locations">
              <Location />
            </Route>
            <Route path="/episodes">
              <Episode />
            </Route>
            <Route exact path="/">
              <Redirect to="/characters"></Redirect>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Home;
