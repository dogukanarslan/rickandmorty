import { useState } from 'react';
import { filters } from '../constants';

const Sidebar = ({ getCharacters }) => {
  const handleClick = (e, filter) => {
    getCharacters(filter);
  };

  return (
    <div className="sidebar">
      <div className="list-group mb-2">
        {filters.statuses.map((status) => {
          return (
            <a
              key={status.value}
              data-toggle="list"
              onClick={(e) => handleClick(e, `status=${status.value}`)}
              className="list-group-item list-group-item-action"
            >
              {status.name}
            </a>
          );
        })}

        {filters.genders.map((gender) => {
          return (
            <a
              key={gender.value}
              data-toggle="list"
              onClick={(e) => handleClick(e, `gender=${gender.value}`)}
              className="list-group-item list-group-item-action"
            >
              {gender.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
