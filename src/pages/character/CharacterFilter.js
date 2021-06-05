import { useEffect, useState } from 'react';
import { filters } from '../../constants';
import { StyledSelectInput } from '../../components/Input/Input.styles';

const CharacterFilter = ({ getCharacters }) => {
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
            <StyledSelectInput
              label="Status"
              options={filters.statuses}
              onChange={(e) => handleChange(e, 'status')}
            />
          </div>
          <div className="col-md-6">
            <StyledSelectInput
              label="Gender"
              options={filters.genders}
              onChange={(e) => handleChange(e, 'gender')}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CharacterFilter;
