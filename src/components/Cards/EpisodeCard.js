import { StyledCard } from './Card.styles';

const EpisodeCard = (props) => {
  const { name, episode, air_date } = props;

  return (
    <StyledCard>
      <h4>{name}</h4>
      <h4>{episode}</h4>
      <h4>{air_date}</h4>
    </StyledCard>
  );
};

export default EpisodeCard;
