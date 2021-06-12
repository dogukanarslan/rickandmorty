import { createContext, useState } from 'react';

export const CharacterContext = createContext({});

const CharacterContextProvider = (props) => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});

  return (
    <CharacterContext.Provider
      value={{ characters, setCharacters, character, setCharacter }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;
