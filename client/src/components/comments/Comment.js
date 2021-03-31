import { Component } from 'react';
import CommentForm from './CommentForm';
import {Button, Card, CardContent, Image, Header, Modal, Icon } from 'semantic-ui-react';
import Comments from './Comments';
import PencilPic from '../images/pencil.png';

class Comment extends Component{
  state = { editing: false }
  
  toggleForm = () => {
    const { editing } = this.state
    this.setState({ editing: !editing })
  }

  render(){
    const { editing } = this.state
    const { id, title, body, deleteComment } = this.props
    return(
      <>
        {
          editing? 
            <CommentForm 
              {...this.props}
              toggleForm={this.toggleForm}
            />
          :
          <Card>
            <CardContent>
              <Image floated="right" size="mini" src={PencilPic} />
              <Card.Header>{title}</Card.Header>
              <Card.Meta>{body}</Card.Meta>
            </CardContent>
            
            <CardContent extra>
              <div className="ui two buttons">
                
                   
                <Button basic color="green" onClick={()=> this.toggleForm()}> Edit </Button>
                <Modal
                  basic
                  size='small'
                  trigger={<Button basic color="red" onClick={()=> deleteComment(id)}> Delete </Button>}
                >
                  <Header> Comment Deleted!</Header>
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
export default Comment;