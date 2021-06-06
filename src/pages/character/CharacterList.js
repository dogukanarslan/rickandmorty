import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { StyledButton } from '../../components/Button/Button.styles';
import { StyledTable } from '../../components/Table/Table.styles';
import CharacterTableRow from '../../components/Table/TableRows/CharacterTableRow';
import { Col, Container, Row } from '../../GlobalStyles';

const CharacterList = ({ characters, setCharacters }) => {
  const handleClick = (type) => {
    fetch(characters.info[type])
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  };

  const { isLightTheme } = useContext(ThemeContext);

  const headers = ['Name', 'Status', 'Species', 'Type', 'Gender'];

  return (
    <Container>
      <Row>
        <Col size={1}>
          <StyledTable
            tableRow={<CharacterTableRow characters={characters.results} />}
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
          <span>{characters.info && characters.info.page}</span>
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

export default CharacterList;
