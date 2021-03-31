import { Component } from 'react';
import axios from 'axios';
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceList';
import { Container, Divider, Icon, Header } from 'semantic-ui-react';
class Services extends Component {
  state = { services: [] }
  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/workers/${id}/services`)
      .then( res => {
        this.setState({ services: res.data })
      })
      .catch( err => console.log(err))
  }
  addService = (service) => {
    const { id } = this.props.match.params
    axios.post(`/api/workers/${id}/services`, { service })
      .then( res => {
        const { services } = this.state 
        this.setState({ services: [...services, res.data ]})
      })
      .catch( err => console.log(err))
  }
  updateService = (serviceId, service ) => {
    const { id } = this.props.match.params
    axios.put(`/api/workers/${id}/services/${serviceId}`, { service })
    .then( res => {
      const services = this.state.services.map( s => {
        if(s.id === serviceId){
          return res.data
        }
        return s
      })
      this.setState({services})
    })
    .catch(err => console.log(err))
  }
  deleteService = (serviceId) => {
    const { id } = this.props.match.params
    axios.delete(`/api/workers/${id}/services/${serviceId}`)
      .then( res => {
        const { services } = this.state 
        this.setState({ services: services.filter( s => s.id !== serviceId )})
      })
      .catch( err => console.log(err))
  }
  render(){
    const { services } = this.state
    return(
      
      <Container textAlign="center">
        <h1> Service List </h1>
        <Divider horizontal>
          <Header>
            <Icon name='clipboard check' />
            Add a new Service
          </Header>
        </Divider>
        <ServiceForm addService={this.addService}/>
        <Divider horizontal>
          <Header>
            <Icon name='dolly' />
              Available Services
          </Header>
        </Divider>
        <ServiceList
          services={services}
          deleteService={this.deleteService}
          updateService={this.updateService}
          />
      </Container>
    )}
    
}
export default Services;