import { useContext, useEffect, useState } from 'react';
import { api } from '../../constants';
import CharacterList from './CharacterList';
import Filter from './CharacterFilter';
import { CharacterContext } from '../../contexts/CharacterContext';
import { Loader } from '../../GlobalStyles';

const Character = () => {
  const { characters, setCharacters } = useContext(CharacterContext);
  const [isLoading, setIsLoading] = useState(true);

  const getCharacters = (filter = '') => {
    fetch(`${api}/character/?${filter}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div>
        <Filter getCharacters={getCharacters} />
        <CharacterList characters={characters} setCharacters={setCharacters} />
      </div>
    );
  }
};

export default Character;
