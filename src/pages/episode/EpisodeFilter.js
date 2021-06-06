import { useEffect, useState } from 'react';
import { StyledTextInput } from '../../components/Input/Input.styles';
import { Col, Container, Row } from '../../GlobalStyles';

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
    <Container>
      <form>
        <Row>
          <Col size={1}>
            <StyledTextInput
              label="Name"
              placeholder="Name"
              onChange={(e) => handleChange(e, 'name')}
            />
          </Col>
          <Col size={1}>
            <StyledTextInput
              label="Episode"
              placeholder="Episode"
              onChange={(e) => handleChange(e, 'episode')}
            />
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default EpisodeFilter;
