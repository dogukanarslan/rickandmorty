import { useEffect } from 'react';
import { api } from '../../constants';
import { useContext } from 'react';
import { EpisodeContext } from '../../contexts/EpisodeContext';
import EpisodeCard from '../../components/Cards/EpisodeCard';

const EpisodeDetail = ({ match: { params } }) => {
  const { episode, setEpisode } = useContext(EpisodeContext);

  useEffect(() => {
    fetch(`${api}/episode/${params.id}`)
      .then((res) => res.json())
      .then((data) => setEpisode(data));
  }, []);

  return <EpisodeCard {...episode} />;
};

export default EpisodeDetail;
