import { Link } from 'react-router-dom';
import {Button} from 'semantic-ui-react';
const NoMatch = () => {
  return (
    <>
      <h1 style={{color:'red'}}>404 Page Not Found</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to='/'>
        <Button positive>
        Return home
        </Button>
      </Link>
    </>
  )
}
export default NoMatch;