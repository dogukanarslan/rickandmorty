import { Switch, Route, Redirect } from 'react-router-dom';
import Character from '../pages/character/Character';
import Location from '../pages/location/Location';
import Episode from '../pages/episode/Episode';
import Sidebar from './Sidebar/Sidebar';
import CharacterDetail from '../pages/character/CharacterDetail';
import { Col, Container, Row } from '../GlobalStyles';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col size={2}>
          <Sidebar />
        </Col>
        <Col size={10}>
          <Switch>
            <Route
              path="/characters/:id"
              render={(routeProps) => <CharacterDetail {...routeProps} />}
            />
            <Route path="/characters">
              <Character />
            </Route>
            <Route path="/locations">
              <Location />
            </Route>
            <Route path="/episodes">
              <Episode />
            </Route>
            <Route exact path="/">
              <Redirect to="/characters" />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
