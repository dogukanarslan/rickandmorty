import { useState, useEffect } from 'react';
import { api } from '../constants';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`${api}/character`)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.results);
      });
  }, []);
  
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Species</th>
          <th>Type</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character) => {
          return (
            <tr key={character.id}>
              <td>{character.name}</td>
              <td>{character.status}</td>
              <td>{character.species}</td>
              <td>{character.type}</td>
              <td>{character.gender}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Characters;
