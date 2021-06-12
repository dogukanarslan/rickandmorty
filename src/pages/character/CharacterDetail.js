import { useEffect } from 'react';
import { api } from '../../constants';
import { useContext } from 'react';
import { CharacterContext } from '../../contexts/CharacterContext';
import CharacterCard from '../../components/Cards/CharacterCard';

const CharacterDetail = ({ match: { params } }) => {
  const { character, setCharacter } = useContext(CharacterContext);

  useEffect(() => {
    fetch(`${api}/character/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, []);

  return <CharacterCard {...character} />;
};

export default CharacterDetail;
