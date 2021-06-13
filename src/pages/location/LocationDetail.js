import { useEffect, useState } from 'react';
import { api } from '../../constants';
import { useContext } from 'react';
import { LocationContext } from '../../contexts/LocationContext';
import LocationCard from '../../components/Cards/LocationCard';
import { Loader } from '../../GlobalStyles';

const LocationDetail = ({ match: { params } }) => {
  const { location, setLocation } = useContext(LocationContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${api}/location/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  } else {
    return <LocationCard {...location} />;
  }
};

export default LocationDetail;
