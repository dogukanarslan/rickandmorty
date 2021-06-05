import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { StyledButton } from '../../components/Button/Button.styles';
import { StyledTable } from '../../components/Table/Table.styles';
import CharacterTableRow from '../../components/Table/TableRows/CharacterTableRow';

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
    <div>
      <StyledTable
        tableRow={<CharacterTableRow characters={characters.results} />}
        headers={headers}
      />
      <nav className="d-flex justify-content-between mt-2">
        <StyledButton
          label="Previous"
          onClick={() => handleClick('prev')}
          dark={!!isLightTheme}
        />
        <span>{characters.info && characters.info.page}</span>
        <StyledButton
          label="Next"
          onClick={() => handleClick('next')}
          dark={!!isLightTheme}
        />
      </nav>
    </div>
  );
};

export default CharacterList;
