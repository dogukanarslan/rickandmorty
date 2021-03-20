import { api } from '../constants';

const Characters = ({ characters, setCharacters }) => {
  const handleClick = (type) => {
    fetch(characters.info[type])
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  };

  return (
    <div>
      <table className="table table-hover">
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
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <span>{characters.info && characters.info.page}</span>
          <li className="page-item" onClick={() => handleClick('next')}>
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Characters;
