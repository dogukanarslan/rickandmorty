import { StyledCard } from './Card.styles';

const LocationCard = (props) => {
  const { dimension, type, name } = props;

  return (
    <StyledCard>
      <h4>{name}</h4>
      <h4>{type}</h4>
      <h4>{dimension}</h4>
    </StyledCard>
  );
};

export default LocationCard;
