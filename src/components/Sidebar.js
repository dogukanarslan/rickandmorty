import { useEffect, useState } from 'react';
import { filters } from '../constants';

const Sidebar = ({ getCharacters }) => {
  const [queryParams, setQueryParams] = useState({});

  const handleClick = (filter) => {
    setQueryParams({ ...queryParams, ...filter });
  };

  useEffect(() => {
    let _queryParams = [];
    for (let key in queryParams) {
      _queryParams.push(key + '=' + queryParams[key]);
    }

    const stringifiedQueryParams = _queryParams.join('&');
    getCharacters(stringifiedQueryParams);
  }, [queryParams]);

  return (
    <div className="sidebar">
      <div className="list-group mb-2">
        {filters.statuses.map((status) => {
          return (
            <a
              key={status.value}
              data-toggle="list"
              onClick={() => handleClick({ status: status.value })}
              className="list-group-item list-group-item-action"
            >
              {status.name}
            </a>
          );
        })}
      </div>
      <div className="list-group">
        {filters.genders.map((gender) => {
          return (
            <a
              key={gender.value}
              data-toggle="list"
              onClick={() => handleClick({ gender: gender.value })}
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
