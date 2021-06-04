import {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';
import {StyledButton} from '../../components/Button/Button.styles';

const CharacterList = ({characters, setCharacters}) => {
  const handleClick = (type) => {
    fetch(characters.info[type])
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  };

  const {isLightTheme} = useContext(ThemeContext);

  return (
    <div>
      <table className="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Species</th>
          <th>Type</th>
          <th>Gender</th>
        </tr>
        </thead>
        <tbody>
        {characters.results &&
        characters.results.map((character) => {
          return (
            <tr key={character.id}>
              <td>{character.name}</td>
              <td>{character.status}</td>
              <td>{character.species}</td>
              <td>{character.type}</td>
              <td>{character.gender}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
      <nav className="d-flex justify-content-between mt-2">
        <StyledButton label="Previous" onClick={() => handleClick('prev')} dark={!!isLightTheme}/>
        <span>{characters.info && characters.info.page}</span>
        <StyledButton label="Next" onClick={() => handleClick('next')} dark={!!isLightTheme}/>
      </nav>
    </div>
  );
};

export default CharacterList;
