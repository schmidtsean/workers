import styled from 'styled-components';
import {Button} from 'semantic-ui-react';
const HomeTitle = styled.h1`
  background: linear-gradient(to bottom right, purple, grey);
  color: white;
  text-align: center;
  font-family: rustic
`
export const HomeBody = styled.p`
  text-align: center;
  padding: 20px;
  border: 1px solid;
  font-family: century gothic;
  font-size: 17px;
`
export const MyButton = styled(Button)`
border-radius: 25px !important;  
color: purple !important;

`


export default HomeTitle;