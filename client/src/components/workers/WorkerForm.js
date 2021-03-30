import { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'semantic-ui-react'

class WorkerForm extends Component{
  state = { title:"", specialty:"", editing: false }
 
  

  componentDidMount(){
    if (this.props.id){
      const {id, title, specialty } = this.props
      this.setState({id, title, specialty})
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id){
      const { updateWorker, id, toggleForm } = this.props
      updateWorker(id, this.state)
      toggleForm()
    } else {
      this.props.addWorker(this.state)
    }
    this.setState({ title:"", specialty:"" })
  }

  render(){
    const { title, specialty } = this.state
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
          placeholder="Name"
        />
        <Form.Field
          control={Input}
          type="text"
          name="specialty"
          value={specialty}
          onChange={this.handleChange}
          required
          placeholder="Specialty"
        />
        <Form.Field control={Button} type="submit">Submit</Form.Field>
        </FormGroup>
      </Form>
    )
  }
}

export default WorkerForm;