import { useEffect } from 'react';
import { api } from '../../constants';
import { useContext } from 'react';
import { LocationContext } from '../../contexts/LocationContext';
import LocationCard from '../../components/Cards/LocationCard';

const LocationDetail = ({ match: { params } }) => {
  const { location, setLocation } = useContext(LocationContext);

  useEffect(() => {
    fetch(`${api}/location/${params.id}`)
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, []);

  return <LocationCard {...location} />;
};

export default LocationDetail;
