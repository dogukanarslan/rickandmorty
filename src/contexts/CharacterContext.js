import { createContext, useState } from 'react';

export const CharacterContext = createContext({});

const CharacterContextProvider = (props) => {
  const [characters, setCharacters] = useState([]);

  return (
    <CharacterContext.Provider value={{ characters, setCharacters }}>
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;
