import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { StyledTable } from '../../components/Table/Table.styles';
import { StyledButton } from '../../components/Button/Button.styles';
import { Col, Container, Row, ScrollableContainer } from '../../GlobalStyles';
import EpisodeTableRow from '../../components/Table/TableRows/EpisodeTableRow';

const EpisodeList = ({ episodes, setEpisodes }) => {
  const history = useHistory();

  const handleClick = (type) => {
    if (!episodes.info[type]) {
      return;
    }

    fetch(episodes.info[type])
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data);
      });
  };

  const onRowClick = (path) => {
    history.push(path);
  };

  const { isLightTheme } = useContext(ThemeContext);

  const headers = ['Name', 'Air Date', 'Episode'];

  return (
    <Container>
      <Row>
        <Col size={1}>
          <ScrollableContainer>
            <StyledTable
              tableRow={
                <EpisodeTableRow
                  onRowClick={onRowClick}
                  episodes={episodes.results}
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
          <span>{episodes.info && episodes.info.page}</span>
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

export default EpisodeList;
