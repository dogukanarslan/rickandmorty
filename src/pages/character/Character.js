import {useContext} from 'react';
import {api} from '../../constants';
import CharacterList from './CharacterList';
import Filter from './CharacterFilter';
import {CharacterContext} from '../../contexts/CharacterContext';

const Character = () => {
  const {characters, setCharacters} = useContext(CharacterContext);
  const getCharacters = (filter = '') => {
    fetch(`${api}/character/?${filter}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  };

  return (
    <div>
      <Filter getCharacters={getCharacters}/>
      <CharacterList characters={characters} setCharacters={setCharacters}/>
    </div>
  );
};

export default Character;
