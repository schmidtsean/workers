import { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'semantic-ui-react'

class CommentForm extends Component{
  state = { title:"", body:"", editing: false }
 
  

  componentDidMount(){
    if (this.props.id){
      const {id, title, body } = this.props
      this.setState({id, title, body})
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
    this.setState({ title:"", body:"" })
  }

  render(){
    const { title, body } = this.state
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
        <Form.Field control={Button} type="submit">Submit</Form.Field>
        </FormGroup>
      </Form>
    )
  }
}

export default CommentForm;