import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { StyledTable } from '../../components/Table/Table.styles';
import { StyledButton } from '../../components/Button/Button.styles';
import { Col, Container, Row, ScrollableContainer } from '../../GlobalStyles';
import LocationTableRow from '../../components/Table/TableRows/LocationTableRow';

const LocationList = ({ locations, setLocations }) => {
  const history = useHistory();

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

  const onRowClick = (path) => {
    history.push(path);
  };

  const { isLightTheme } = useContext(ThemeContext);

  const headers = ['Name', 'Type', 'Dimension'];

  return (
    <Container>
      <Row>
        <Col size={1}>
          <ScrollableContainer>
            <StyledTable
              tableRow={
                <LocationTableRow
                  onRowClick={onRowClick}
                  locations={locations.results}
                />
              }
              headers={headers}
            />
          </ScrollableContainer>
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
