import {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';

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
      <table className={`table table-hover ${isLightTheme ? 'text-dark' : 'text-light'}`}>
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
        <button onClick={() => handleClick('prev')}
                className={`btn ${isLightTheme ? 'btn-gray' : 'btn-orange'}`}>
          Previous
        </button>
        <span>{characters.info && characters.info.page}</span>
        <button onClick={() => handleClick('next')} className={`btn ${isLightTheme ? 'btn-gray' : 'btn-orange'}`}>
          Next
        </button>
      </nav>
    </div>
  );
};

export default CharacterList;
