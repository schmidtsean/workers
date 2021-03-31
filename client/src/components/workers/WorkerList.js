import Worker from './Worker';
import { Grid } from 'semantic-ui-react';


const WorkerList = ({ workers, deleteWorker, updateWorker}) => {
  return(
    <>
        <Grid columns="2">
      { workers.map(w =>
       
          <Grid.Column>
           
          <Worker
            key={w.id}
            {...w}
            deleteWorker={deleteWorker}
            updateWorker={updateWorker}
            />
            </Grid.Column>
        )} 
        </Grid>
        
    </>
  )
}
export default WorkerList;