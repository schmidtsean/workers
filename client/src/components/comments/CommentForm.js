import { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'semantic-ui-react'

class CommentForm extends Component{
  state = { title:"", body:"", rating:"", editing: false }
 
  

  componentDidMount(){
    if (this.props.id){
      const {id, title, body, rating } = this.props
      this.setState({id, title, body, rating})
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id){
      const { updateComment, id, toggleForm } = this.props
      updateComment(id, this.state)
      toggleForm()
    } else {
      this.props.addComment(this.state)
    }
    this.setState({ title:"", body:"", rating:""})
  }

  render(){
    const { title, body, rating } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <FormGroup widths="equal">
        <Form.Field
          control={Input}
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
          required
          placeholder="Comment Name"
        />
        <Form.Field
          control={Input}
          type="text"
          name="body"
          value={body}
          onChange={this.handleChange}
          required
          placeholder="Comment"
        />
        <Form.Field
          control={Input}
          type="text"
          name="rating"
          value={rating}
          onChange={this.handleChange}
          required
          placeholder="Rating from 1-5"
        />
        <Form.Field control={Button} type="submit">Submit</Form.Field>
        </FormGroup>
      </Form>
    )
  }
}

export default CommentForm;