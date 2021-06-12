import { StyledCard } from './Card.styles';

const CharacterCard = (props) => {
  const { image, gender, name } = props;

  return (
    <StyledCard>
      <img src={image} alt="Location" />
      <h4>{name}</h4>
      <h4>{gender}</h4>
    </StyledCard>
  );
};

export default CharacterCard;
