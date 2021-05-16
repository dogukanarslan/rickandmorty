import {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';

const CharacterList = ({ characters, setCharacters }) => {
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
      <table className={`table table-hover ${isLightTheme ? 'text-dark' : 'text-light' }`}>
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
      <nav>
        <ul className="pagination d-flex justify-content-between">
          <li className="page-item" onClick={() => handleClick('prev')}>
            <button className="page-link">Previous</button>
          </li>
          <span>{characters.info && characters.info.page}</span>
          <li className="page-item" onClick={() => handleClick('next')}>
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CharacterList;
