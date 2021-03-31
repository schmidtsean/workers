import HomeTitle, { HomeBody } from '../homeStyles.js/homeStyles';
import {Link} from 'react-router-dom';
import {Button, Container, Divider, Header, Icon } from 'semantic-ui-react';
const Home = () => {
return(
  <>
  <Container textAlign='center'>
    <br />
    <HomeTitle> Welcome to Devpoint Workers</HomeTitle><Divider /> <br /> <br />
    <HomeBody>At Devpoint Workers, we are here to give you the best service possible.
      We garantee that we have the right worker for you.
    </HomeBody>
    <Header size="large">Please browse through our Workers to select which specialist can help you.</Header>
   
      <Button size='big' icon labelPosition='right'>
        <Link to="/workers" >
        Our Workers
        </Link>
        <Icon name='right arrow' />
      </Button>
  
  </Container>
  </>
)
}

export default Home;