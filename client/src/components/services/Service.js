import { Component } from 'react';
import ServiceForm from './ServiceForm';
import {Button, Card, CardContent, Image, Header, Modal, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import ServicePic from '../images/service.jpg';

class Service extends Component{
  state = { editing: false }
  
  toggleForm = () => {
    const { editing } = this.state
    this.setState({ editing: !editing })
  }

  render(){
    const { editing } = this.state
    const { id, title, body, deleteService } = this.props
    return(
      <>
        
        {
          editing? 
            <ServiceForm 
              {...this.props}
              toggleForm={this.toggleForm}
            />
          :
          <Card>
            <CardContent>
              <Image floated="right" size="mini" src={ServicePic} />
              <Card.Header>{title}</Card.Header>
              <Card.Meta>{body}</Card.Meta>
            </CardContent>
            
            <CardContent extra>
              <div className="ui three buttons">
                <Button basic color="green">
                  <Link to={`/services/${id}/comments`}
                  > 
                  View 
                   </Link>
                   </Button>
                   
                <Button basic color="green" onClick={()=> this.toggleForm()}> Edit </Button>
                <Modal
                  basic
                  size='small'
                  trigger={<Button basic color="red" onClick={()=> deleteService(id)}> Delete </Button>}
                >
                  <Header> Service Deleted!</Header>
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
export default Service;