import { Component } from 'react';
import WorkerForm from './WorkerForm';
import {Button, Card, CardContent, Image, Header, Modal, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Elliot from '../images/elliot.jpg';

class Worker extends Component{
  state = { editing: false }
  
  toggleForm = () => {
    const { editing } = this.state
    this.setState({ editing: !editing })
  }

  render(){
    const { editing } = this.state
    const { id, title, specialty, deleteWorker } = this.props
    return(
      <>
        
        {
          editing? 
            <WorkerForm 
              {...this.props}
              toggleForm={this.toggleForm}
            />
          :
          <Card>
            <CardContent>
              <Image floated="right" size="mini" src={Elliot} />
              <Card.Header>{title}</Card.Header>
              <Card.Meta>{specialty}</Card.Meta>
            </CardContent>
            
            <CardContent extra>
              <div className="ui three buttons">
                <Button basic color="green">
                  <Link to={`/workers/${id}/services`}
                  > 
                  View Services
                   </Link>
                   </Button>
                   
                <Button basic color="green" onClick={()=> this.toggleForm()}> Edit </Button>
                <Modal
                  basic
                  size='small'
                  trigger={<Button basic color="red" onClick={()=> deleteWorker(id)}> Delete </Button>}
                >
                  <Header> Worker Deleted!</Header>
                  <Modal.Actions>
                    <Button color='green' inverted>
                      <Icon name="checkmark" /> Ok
                    </Button>
                  </Modal.Actions>
                </Modal>
                
              </div>
            </CardContent>
          </Card>
          
          }
          
      </>
    )
  }
}
export default Worker;