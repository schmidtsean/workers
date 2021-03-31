import { Component } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { Container, Divider, Icon, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
class Comments extends Component {
  state = { comments: [] }
  
  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/services/${id}/comments`)
      .then( res => {
        this.setState({ comments: res.data })
      })
      .catch( err => console.log(err))
  }
  addComment = (comment) => {
    const { id } = this.props.match.params
    axios.post(`/api/services/${id}/comments`, { comment })
      .then( res => {
        const { comments } = this.state 
        this.setState({ comments: [...comments, res.data ]})
      })
      .catch( err => console.log(err))
  }
  updateComment = (commentId, comment ) => {
    const { id } = this.props.match.params
    axios.put(`/api/services/${id}/comments/${commentId}`, { comment })
    .then( res => {
      const comments = this.state.comments.map( c => {
        if(c.id === commentId){
          return res.data
        }
        return c
      })
      this.setState({comments})
    })
    .catch(err => console.log(err))
  }
  deleteComment = (commentId) => {
    const { id } = this.props.match.params
    axios.delete(`/api/services/${id}/comments/${commentId}`)
      .then( res => {
        const { comments } = this.state 
        this.setState({ comments: comments.filter( c => c.id !== commentId )})
      })
      .catch( err => console.log(err))
  }
  render(){
    const { comments } = this.state
    return(
      <Container textAlign="center">
        <h1> Comments </h1>
        <Divider horizontal>
          <Header>
            <Icon name='comment' />
            Add a new Comment
          </Header>
        </Divider>
        <CommentForm addComment={this.addComment}/>
        <Divider horizontal>
          <Header>
            <Icon name='comment alternate outline' />
              Comments
          </Header>
        </Divider>
        <CommentList
          comments={comments}
          deleteComment={this.deleteComment}
          updateComment={this.updateComment}
          />
      </Container>
    )}
}
export default withRouter(Comments);