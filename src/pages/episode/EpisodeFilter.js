import { useEffect, useState } from 'react';
import { StyledTextInput } from '../../components/Input/Input.styles';

const EpisodeFilter = ({ getEpisodes }) => {
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
    getEpisodes(stringifiedQueryParams);
  }, [queryParams]);

  return (
    <div className="sidebar">
      <form>
        <div className="row mb-4">
          <div className="col-md-6">
            <StyledTextInput
              label="Name"
              placeholder="Name"
              onChange={(e) => handleChange(e, 'name')}
            />
          </div>
          <div className="col-md-6">
            <StyledTextInput
              label="Episode"
              placeholder="Episode"
              onChange={(e) => handleChange(e, 'episode')}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EpisodeFilter;
