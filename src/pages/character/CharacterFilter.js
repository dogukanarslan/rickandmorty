import {useEffect, useState} from 'react';
import {filters} from '../../constants';
import {SelectInputWrapper, StyledSelectInput} from '../../components/Input/Input.styles';

const CharacterFilter = ({getCharacters}) => {
  const [queryParams, setQueryParams] = useState({});

  const handleChange = (e, type) => {
    e.preventDefault();
    let filter = {};
    filter[type] = e.target.value;
    setQueryParams({...queryParams, ...filter});
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
            <StyledSelectInput label="Status" filters={filters} onChange={(e) => handleChange(e, 'status')}/>
          </div>
          <div className="col-md-6">
            <label>Gender</label>
            <div className="select-wrapper">
              <select
                className="select"
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
        </div>
      </form>
    </div>
  );
};

export default CharacterFilter;
