import { Component } from 'react';
import axios from 'axios';
import Service from './Service'
class Services extends Component {
  state = { services: [] }
  componentDidMount() {
    const { workerId } = this.props
    axios.get(`/api/workers/${workerId}/services`)
      .then( res => {
        this.setState({ services: res.data })
      })
      .catch( err => console.log(err))
  }
  addService = (service) => {
    const { workerId } = this.props
    axios.post(`/api/workers/${workerId}/services`, { service })
      .then( res => {
        const { services } = this.state 
        this.setState({ services: [...services, res.data ]})
      })
      .catch( err => console.log(err))
  }
  deleteService = (id) => {
    const { workerId } = this.props
    axios.delete(`/api/workers/${workerId}/services/${id}`)
      .then( res => {
        const { services } = this.state 
        this.setState({ services: services.filter( s => s.id !== id )})
      })
      .catch( err => console.log(err))
  }
  render() {
    const { services } = this.state
    return (
      <>
      <h1>Services Page, you will probably have to redo all of this but it links to the page properly</h1>
        { services.map( p => 
          <Service key={p.id} {...p} deletePost={this.deleteService} />
        )}
      </>
    )
  }
}
export default Services;