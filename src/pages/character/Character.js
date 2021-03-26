import { useState } from 'react';
import { api } from '../../constants';
import CharacterList from './CharacterList';
import Filter from './Filter';

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const getCharacters = (filter = '') => {
    fetch(`${api}/character/?${filter}`)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res);
      });
  };

  return (
    <div>
      <Filter getCharacters={getCharacters} />
      <CharacterList characters={characters} setCharacters={setCharacters} />
    </div>
  );
};

export default Character;
