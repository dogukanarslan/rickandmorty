import { createContext, useState } from 'react';

export const LocationContext = createContext({});

const LocationContextProvider = (props) => {
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState([]);

  return (
    <LocationContext.Provider
      value={{ locations, setLocations, location, setLocation }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
