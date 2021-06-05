import { createContext, useState } from 'react';

export const EpisodeContext = createContext({});

const EpisodeContextProvider = (props) => {
  const [episodes, setEpisodes] = useState([]);

  return (
    <EpisodeContext.Provider value={{ episodes, setEpisodes }}>
      {props.children}
    </EpisodeContext.Provider>
  );
};

export default EpisodeContextProvider;
