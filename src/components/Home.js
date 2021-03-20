import { useState, useEffect } from 'react';
import Main from './Main';
import Filter from './Filter';
import Sidebar from './Sidebar';
import { api } from '../constants';

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = (filter = '') => {
    fetch(`${api}/character/?${filter}`)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.results);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Filter getCharacters={getCharacters} />
          <Main characters={characters} />
        </div>
      </div>
    </div>
  );
};

export default Home;
