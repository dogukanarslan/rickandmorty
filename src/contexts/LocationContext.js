import { createContext, useState } from 'react';

export const LocationContext = createContext({});

const LocationContextProvider = (props) => {
  const [locations, setLocations] = useState([]);

  return (
    <LocationContext.Provider value={{ locations, setLocations }}>
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
