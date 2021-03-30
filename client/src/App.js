import { Route, Switch } from 'react-router-dom';
import Workers from './components/workers/Workers';

import Services from './components/services/Services';
import Home from './components/shared/Home';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import { Container, Sticky } from 'semantic-ui-react';

const App = () => (
  <>
    <Sticky>
      <Navbar />
    </Sticky>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/workers" component={Workers} />
        <Route exact path="/workers/:id/services" component={Services} />
        <Route component= {NoMatch} />
      </Switch>
    </Container>
  </>
)
export default App;