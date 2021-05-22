import {useContext} from 'react';
import {api} from '../../constants';
import EpisodeList from './EpisodeList';
import Filter from './EpisodeFilter';
import {EpisodeContext} from '../../contexts/EpisodeContext';

const Episode = () => {
  const {episodes, setEpisodes} = useContext(EpisodeContext);
  const getEpisodes = (filter = '') => {
    fetch(`${api}/episode/?${filter}`)
      .then((res) => res.json())
      .then((res) => {
        setEpisodes(res);
      });
  };

  return (
    <div>
      <Filter getEpisodes={getEpisodes}/>
      <EpisodeList episodes={episodes} setEpisodes={setEpisodes}/>
    </div>
  );
};

export default Episode;
