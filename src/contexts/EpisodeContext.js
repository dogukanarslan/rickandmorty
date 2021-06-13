import { createContext, useState } from 'react';

export const EpisodeContext = createContext({});

const EpisodeContextProvider = (props) => {
  const [episodes, setEpisodes] = useState([]);
  const [episode, setEpisode] = useState({});

  return (
    <EpisodeContext.Provider
      value={{ episodes, setEpisodes, episode, setEpisode }}
    >
      {props.children}
    </EpisodeContext.Provider>
  );
};

export default EpisodeContextProvider;
