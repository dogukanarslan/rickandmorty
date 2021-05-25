import {Switch, Route, Redirect} from 'react-router-dom';
import Character from '../pages/character/Character';
import Location from '../pages/location/Location';
import Episode from '../pages/episode/Episode';
import Sidebar from './Sidebar';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

const Home = () => {
  const {isLightTheme} = useContext(ThemeContext);
  return (
    <div className={`container-fluid pt-4 ${isLightTheme ? 'text-dark' : 'bg-dark text-light'}`}>
      <div className="row">
        <div className="col-md-2">
          <Sidebar/>
        </div>
        <div className="col-md-10">
          <Switch>
            <Route path="/characters">
              <Character/>
            </Route>
            <Route path="/locations">
              <Location/>
            </Route>
            <Route path="/episodes">
              <Episode/>
            </Route>
            <Route exact path="/">
              <Redirect to="/characters"/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Home;
