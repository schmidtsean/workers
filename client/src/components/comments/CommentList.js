import Comment from './Comment';
import { Grid } from 'semantic-ui-react';


const CommentList = ({ comments, deleteComment, updateComment}) => {
  return(
    <>
        <Grid columns="1">
      { comments.map(c =>
       
          <Grid.Column>
           
          <Comment
            key={c.id}
            {...c}
            deleteComment={deleteComment}
            updateComment={updateComment}
            />
            </Grid.Column>
        )} 
        </Grid>
        
    </>
  )
}
export default CommentList;