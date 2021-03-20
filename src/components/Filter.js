import { useEffect, useState } from 'react';
import { filters } from '../constants';

const Filter = ({ getCharacters }) => {
  const [queryParams, setQueryParams] = useState({});

  const handleChange = (e, type) => {
    e.preventDefault();
    let filter = {};
    filter[type] = e.target.value;
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
      <form>
        <div className="row mb-4">
          <div className="col-md-6">
            <label>Status</label>
            <select
              className="form-control"
              onChange={(e) => handleChange(e, 'status')}
            >
              {filters.statuses.map((status) => {
                return (
                  <option key={status.value} value={status.value}>
                    {status.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-6">
            <label>Gender</label>
            <select
              className="form-control"
              onChange={(e) => handleChange(e, 'gender')}
            >
              {filters.genders.map((gender) => {
                return (
                  <option key={gender.value} value={gender.value}>
                    {gender.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filter;
