import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Log from './user.svg'
import { Col } from 'react-bootstrap';

const style = {
  height: 60,
  width: "100%",
  margin: 0,backgroundColor:'#009688',
 position:'fixed',
 top:0,
 zIndex: 1
};

const Navigation = () => (
  <div>
    <Paper style={style} zDepth={1} >
	<div  style={{padding:10}}>
	<Col xs={10} md={11}>
	<span style={{fontSize:30,fontFamily:'Prata',color:'#fff',marginLeft:40,fontStyle:'bold'}}>Awesome React
	</span></Col><Col xs={2} md={1}><span>
	<IconButton  tooltip="LogIn/SignIn"><img src={Log} width='25' height='25'/></IconButton>
	</span></Col>
	</div>
   </Paper>
  </div>
);

export default Navigation;