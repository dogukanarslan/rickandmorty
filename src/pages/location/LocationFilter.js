import {useEffect, useState} from 'react';

const LocationFilter = ({getLocations}) => {
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
    getLocations(stringifiedQueryParams);
  }, [queryParams]);

  return (
    <div className="sidebar">
      <form>
        <div className="row mb-4">
          <div className="col-md-6">
            <label>Name</label>
            <div className="input-wrapper">
              <input
                className="input"
                type="text"
                placeholder="Name"
                onChange={(e) => handleChange(e, 'name')}
              />
            </div>
          </div>
          <div className="col-md-6">
            <label>Dimension</label>
            <div className="input-wrapper">
              <input
                className="input"
                type="text"
                placeholder="Dimension"
                onChange={(e) => handleChange(e, 'dimension')}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LocationFilter;
