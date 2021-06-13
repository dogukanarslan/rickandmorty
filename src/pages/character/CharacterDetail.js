import { useEffect, useState } from 'react';
import { api } from '../../constants';
import { useContext } from 'react';
import { CharacterContext } from '../../contexts/CharacterContext';
import CharacterCard from '../../components/Cards/CharacterCard';
import { Loader } from '../../GlobalStyles';

const CharacterDetail = ({ match: { params } }) => {
  const { character, setCharacter } = useContext(CharacterContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${api}/character/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  } else {
    return <CharacterCard {...character} />;
  }
};

export default CharacterDetail;
