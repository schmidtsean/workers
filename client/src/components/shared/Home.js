import HomeTitle, { HomeBody } from '../homeStyles.js/homeStyles';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
const Home = () => {
return(
  <>
  
  <HomeTitle> Welcome to Devpoint Workers</HomeTitle>
  <HomeBody>At Devpoint Workers, we are here to give you the best service possible.
    We garantee that we have the right worker for you.
  </HomeBody>
  <p style={{textAlign:"center"}}>Please browse through our Workers to select which specialist can help you.</p>
  <div style={{textAlign:"center"}}>
    <Button size="small" basic color="purple">
      <Link to="/workers" >
      Our Workers
      </Link>
    </Button>
  </div>
  </>
)
}

export default Home;