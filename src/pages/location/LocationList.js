import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { StyledTable } from '../../components/Table/Table.styles';
import { StyledButton } from '../../components/Button/Button.styles';
import LocationTableRow from '../../components/Table/TableRows/LocationTableRow';

const LocationList = ({ locations, setLocations }) => {
  const handleClick = (type) => {
    fetch(locations.info[type])
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      });
  };

  const { isLightTheme } = useContext(ThemeContext);

  const headers = ['Name', 'Type', 'Dimension'];

  return (
    <div>
      <StyledTable
        tableRow={<LocationTableRow locations={locations.results} />}
        headers={headers}
      />
      <nav className="d-flex justify-content-between mt-2">
        <StyledButton
          label="Previous"
          onClick={() => handleClick('prev')}
          dark={!!isLightTheme}
        />
        <span>{locations.info && locations.info.page}</span>
        <StyledButton
          label="Next"
          onClick={() => handleClick('next')}
          dark={!!isLightTheme}
        />
      </nav>
    </div>
  );
};

export default LocationList;
