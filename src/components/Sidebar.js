import { filters } from '../constants';

const Sidebar = ({ getCharacters }) => {
  return (
    <div className="sidebar">
      <ul className="list-group">
        {filters.statuses.map((status) => {
          return (
            <li
              key={status.value}
              onClick={() => getCharacters(`status=${status.value}`)}
              className="list-group-item"
            >
              {status.name}
            </li>
          );
        })}

        {filters.genders.map((gender) => {
          return (
            <li
              key={gender.value}
              onClick={() => getCharacters(`gender=${gender.value}`)}
              className="list-group-item"
            >
              {gender.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
