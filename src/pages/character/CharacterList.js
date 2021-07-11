import { useHistory } from 'react-router-dom';
import { StyledButton } from '../../components/Button/Button.styles';
import { StyledTable } from '../../components/Table/Table.styles';
import { Col, Container, Row, ScrollableContainer } from '../../GlobalStyles';
import CharacterTableRow from '../../components/Table/TableRows/CharacterTableRow';
import { StyledPagination } from '../../components/Pagination/Pagination.styles';

const CharacterList = ({ characters, setCharacters }) => {
  const history = useHistory();

  const handleClick = (type) => {
    if (!characters.info[type]) {
      return;
    }

    fetch(characters.info[type])
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  };

  const onRowClick = (path) => {
    history.push(path);
  };

  const headers = ['Name', 'Status', 'Species', 'Type', 'Gender'];

  return (
    <Container>
      <Row>
        <Col size={1}>
          <ScrollableContainer>
            <StyledTable
              tableRow={
                <CharacterTableRow
                  onRowClick={onRowClick}
                  characters={characters.results}
                />
              }
              headers={headers}
            />
          </ScrollableContainer>
        </Col>
      </Row>
      <Row justifyContent="space-between" style={{ marginTop: '10px' }}>
        <Col size={1} textAlign="left">
          <StyledButton label="Previous" onClick={() => handleClick('prev')} />
        </Col>
        <Col size={1} textAlign="center">
          <StyledPagination data={characters.results} info={characters.info} />
        </Col>
        <Col size={1} textAlign="right">
          <StyledButton label="Next" onClick={() => handleClick('next')} />
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterList;
