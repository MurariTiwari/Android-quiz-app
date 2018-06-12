import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Na from './n.svg';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dr from './dr.svg'
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import Log from './user.svg';
import Ct from './ct.svg';
import Pro from './pro.svg'
import Ld from './ld.svg'
import Gl from './gl.svg'
import Md from './md.svg'
import Ft from './ft.svg'
import Cb from './cb.svg'
import Use from './use';
import Navp from './navp';
 const s1 = {
	 fontFamily:'Prata',
	 color:'#00695C'
 };
 
let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
	
      });
	  switch(index)
	  {
		  case 1: ReactDOM.render(<MuiThemeProvider><Use /></MuiThemeProvider>, document.getElementById('page'));
		  break;
		  case 2: ReactDOM.render(<MuiThemeProvider><Navp /></MuiThemeProvider>, document.getElementById('page'));
		  break;
	  }
	 
    };


    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

const ListExampleSelectable = () => (
 <div> <Paper style={{width:'100%',marginTop:60}} zDepth={2} >
         <div style={{backgroundColor:'#00695C',color:'#fff',fontSize:20,textAlign:'center',padding:10,marginBottom:0}}>Component's</div>
       <Divider/>
          <List style={{borderStyle:'solid',borderBottomWidth:0,borderRightWidth:2,borderLeftWidth:0,borderTopWidth:0,borderColor:'#009688',paddingTop:0,marginTop:0}}>
         
    <SelectableList defaultValue={1}>
     <ListItem primaryText="Getting started with our components" style={{s1}} value={1} />
			<Divider/>
            <ListItem primaryText="Navigation" value={2} style={{s1}} leftAvatar={<Avatar src={Na}  backgroundColor='#A5D6A7'/>}
           secondaryText={
            <p>
             --
             Creates Navigation bar of your site.
			 </p>
          }			></ListItem>
			<Divider/>
            <ListItem primaryText="Login & Signup" value={3} style={{s1}} 
			leftAvatar={<Avatar src={Log}  backgroundColor='#A5D6A7' />}
           secondaryText={
            <p>
             --
             Authentication Component
			 </p> }	
			/>
			<Divider/>
             <ListItem primaryText="Drawer"  value={4} style={{s1}} 
			 leftAvatar={<Avatar src={Dr} backgroundColor='#A5D6A7'/>}
           secondaryText={
            <p>
             --
             Create Left And Right Panel
			 </p> }	/>
			<Divider/>
			 <ListItem primaryText="Chat-Bot"  value={5} style={{s1}} 
			 
			 leftAvatar={<Avatar src={Ct}   backgroundColor='#A5D6A7' />}
           secondaryText={
            <p>
             --
             Chat With Us Component
			 </p> }	/>
			<Divider/>
			 <ListItem primaryText="Gallary" style={{s1}} value={6} 
			 leftAvatar={<Avatar src={Gl}  backgroundColor='#A5D6A7' />}
           secondaryText={
            <p>
             --
             Photo Gallary Component
			 </p> }/>
			<Divider/>
			 <ListItem primaryText="Footer" style={{s1}}  value={7}
			 leftAvatar={<Avatar src={Ft}  backgroundColor='#A5D6A7'  />}
           secondaryText={
            <p>
             --
             Footer Component of Webpage
			 </p> }/>
			<Divider/>
			 <ListItem primaryText="Comment-Box" style={{s1}}  value={8}
			 leftAvatar={<Avatar src={Cb}  backgroundColor='#A5D6A7' />}
           secondaryText={
            <p>
             --
             Component for commenting below posts
			 </p> }
			 />
			<Divider/>
			 <ListItem primaryText="Profile"  style={{s1}}  value={9}
             leftAvatar={<Avatar src={Pro}  backgroundColor='#A5D6A7' />}
           secondaryText={
            <p>
             --
             Users Profile Component
			 </p> }			 />
			<Divider/>
			 <ListItem primaryText="Social-Media"  style={{s1}} value={10}
             leftAvatar={<Avatar src={Md}  backgroundColor='#A5D6A7' />}
           secondaryText={
            <p>
             --
             Component to display post's
			 </p> }			 />
			<Divider/>
			 <ListItem primaryText="Loading"  style={{s1}}  value={11}
			 leftAvatar={<Avatar src={Ld}  backgroundColor='#A5D6A7' />}
           secondaryText={
            <p>
             --
             Wait Component
			 </p> }/>
			<Divider/>
         
	 </SelectableList>
   </List>
        </Paper>
      </div>
);

export default ListExampleSelectable;