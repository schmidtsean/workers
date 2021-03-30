import { Component } from 'react';
import WorkerForm from './WorkerForm';
import WorkerList from './WorkerList';
import axios from 'axios';
import { Container, Divider, Icon, Header } from 'semantic-ui-react';
class Workers extends Component{
  state = { workers: [] }
  componentDidMount(){
    axios.get('/api/workers')
    .then(res => {
      this.setState({ workers: res.data })
    })
    .catch( err => console.log(err))
  }

  addWorker = ( worker ) => {
    axios.post('/api/workers', { worker })
    .then( res => {
      const { workers } = this.state
      this.setState({ workers: [...workers, res.data] })
    })
    .catch( err => console.log(err))
  }

  updateWorker = (id, worker ) => {
    axios.put(`/api/workers/${id}`, { worker })
    .then( res => {
      const workers = this.state.workers.map( w => {
        if(w.id === id){
          return res.data
        }
        return w
      })
      this.setState({workers})
    })
    .catch(err => console.log(err))
  }

  deleteWorker = (id) => {
    axios.delete(`/api/workers/${id}`)
    .then( res => {
      const { workers } = this.state
      this.setState({ workers: workers.filter( w => w.id !== id)})
      alert(res.data.message)
    })
    .catch( err => console.log(err))
  }

  render(){
    const { workers } = this.state
    return(
      <Container textAlign="center">
        <h1> Worker List </h1>
        <Divider horizontal>
          <Header>
            <Icon name='user circle' />
            Add a new Worker
          </Header>
        </Divider>
        <WorkerForm addWorker={this.addWorker}/>
        <Divider horizontal>
          <Header>
            <Icon name='group' />
              Available Workers
          </Header>
        </Divider>
        <WorkerList
          workers={workers}
          deleteWorker={this.deleteWorker}
          updateWorker={this.updateWorker}
          />
      </Container>
    )}

}
export default Workers;