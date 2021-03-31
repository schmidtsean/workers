import Service from './Service';
import { Grid } from 'semantic-ui-react';


const ServiceList = ({ services, deleteService, updateService}) => {
  return(
    <>
        <Grid columns="2">
      { services.map(s =>
       
          <Grid.Column>
           
          <Service
            key={s.id}
            {...s}
            deleteService={deleteService}
            updateService={updateService}
            />
            </Grid.Column>
        )} 
        </Grid>
        
    </>
  )
}
export default ServiceList;