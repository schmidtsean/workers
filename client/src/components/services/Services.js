import { Component } from 'react';
import axios from 'axios';
import Service from './Service'
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
  deleteService = (serviceId) => {
    const { id } = this.props.match.params
    axios.delete(`/api/workers/${id}/services/${serviceId}`)
      .then( res => {
        const { services } = this.state 
        this.setState({ services: services.filter( s => s.id !== serviceId )})
      })
      .catch( err => console.log(err))
  }
  render() {
    const { services } = this.state
    return (
      <>
        { services.map( s => 
          <Service key={s.id} {...s} deleteService={this.deleteService} />
        )}
      </>
    )
  }
}
export default Services;