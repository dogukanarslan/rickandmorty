import { useEffect, useState } from 'react';
import { filters } from '../../constants';
import { StyledSelectInput } from '../../components/Input/Input.styles';
import { Col, Container, Row } from '../../GlobalStyles';

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
    <Container>
      <form>
        <Row>
          <Col size={1}>
            <StyledSelectInput
              label="Status"
              options={filters.statuses}
              onChange={(e) => handleChange(e, 'status')}
            />
          </Col>
          <Col size={1}>
            <StyledSelectInput
              label="Gender"
              options={filters.genders}
              onChange={(e) => handleChange(e, 'gender')}
            />
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default CharacterFilter;
