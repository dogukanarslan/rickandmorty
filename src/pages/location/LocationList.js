import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { StyledTable } from '../../components/Table/Table.styles';
import { StyledButton } from '../../components/Button/Button.styles';
import LocationTableRow from '../../components/Table/TableRows/LocationTableRow';
import { Col, Container, Row } from '../../GlobalStyles';

const LocationList = ({ locations, setLocations }) => {
  const handleClick = (type) => {
    if (!locations.info[type]) {
      return;
    }

    fetch(locations.info[type])
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      });
  };

  const { isLightTheme } = useContext(ThemeContext);

  const headers = ['Name', 'Type', 'Dimension'];

  return (
    <Container>
      <Row>
        <Col size={1}>
          <StyledTable
            tableRow={<LocationTableRow locations={locations.results} />}
            headers={headers}
          />
        </Col>
      </Row>
      <Row justifyContent="space-between" style={{ marginTop: '10px' }}>
        <Col size={1} textAlign="left">
          <StyledButton
            label="Previous"
            onClick={() => handleClick('prev')}
            dark={!!isLightTheme}
          />
        </Col>
        <Col size={1} textAlign="center">
          <span>{locations.info && locations.info.page}</span>
        </Col>
        <Col size={1} textAlign="right">
          <StyledButton
            label="Next"
            onClick={() => handleClick('next')}
            dark={!!isLightTheme}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LocationList;
