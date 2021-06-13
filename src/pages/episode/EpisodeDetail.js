import { useEffect, useState } from 'react';
import { api } from '../../constants';
import { useContext } from 'react';
import { EpisodeContext } from '../../contexts/EpisodeContext';
import EpisodeCard from '../../components/Cards/EpisodeCard';
import { Loader } from '../../GlobalStyles';

const EpisodeDetail = ({ match: { params } }) => {
  const { episode, setEpisode } = useContext(EpisodeContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${api}/episode/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setEpisode(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  } else {
    return <EpisodeCard {...episode} />;
  }
};

export default EpisodeDetail;
