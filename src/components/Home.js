import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './Main';
import Filter from './Filter';
import Sidebar from './Sidebar';
import { api } from '../constants';

const Home = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = (filter = '') => {
    fetch(`${api}/character/?${filter}`)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Switch>
            <Route path="/characters">
              <Filter getCharacters={getCharacters} />
              <Main characters={characters} setCharacters={setCharacters} />
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
