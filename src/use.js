import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const style = {
  
  width:'100%',
 
};

const PaperExampleSimple = () => (
  <div>
  <br/><br/><br/>
  <div style={{margin:20}}>
	<h3>Required Knowledge</h3>
	<Divider/>
	<p style={{margin:10,fontSize:17,color:'#616161'}}>
	We recommend that you get to know 
	<a href="https://reactjs.org/">  React </a>before diving into our Components. Our Components are set of React components, so understanding how React fits into web development is important.
	</p>
	<p style={{margin:10,fontSize:17,color:'#616161'}}>
	Our Components uses React Js along with its libraries like 
	<a href="http://www.material-ui.com/"> Material-ui</a> and
	<a href="https://React-bootstrap.github.io"> React-Bootstrap </a>,We provide Complete Components code to provide most flexibility while customizing.  
	</p>
	
	<h3>Getting Started</h3>
	
	<Divider/>
	<br/>
	<code>npm i material-ui</code>
	<p style={{margin:10,fontSize:17,color:'#616161'}}>
	Install material-ui when our component uses Material-ui and material-ui components must always be rendered inside a <a href="http://www.material-ui.com/#/get-started/usage">material-ui theam</a>
	</p>
	
	<br/>
	<code>npm i react-bootstrap</code>
	<p style={{margin:10,fontSize:17,color:'#616161'}}>
	Install react-bootstrap when our component uses React-Bootstrap. While using React-Bootstrap we need to include <a href="https://react-bootstrap.github.io/getting-started/introduction"> CSS file</a> of React-Bootstrap</p>
    <Divider/><br/>
	<p style={{margin:10,fontSize:17,color:'#616161'}}><i>If you are not getting then  install both material-ui and react-bootstrap and copy our components CSS file and JS file.
    And enjoy our Components.</i>
   </p>
   </div>
  </div>
);

export default PaperExampleSimple;