import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectLight } from '../actions/index';
import { bindActionCreators } from 'redux';

class SelectLight extends Component { 	
	render() {	  
		return (
			 <div>	
				<div>	
					<span className="bold">Traffic Police Actions: </span>
					<span className="marginRight10"><button  type="button" className="btn btn-danger" onClick={() => this.props.selectLight('RED')} >Red</button></span>
					<span className="marginRight10"><button type="button" className="btn btn-ready " onClick={() => this.props.selectLight('YELLOW')} >Yellow</button></span>
					<span><button type="button"  className="btn btn-success" onClick={() => this.props.selectLight('GREEN')} >Green</button></span>												
				</div>				
			</div>
		);
    }

}

//Whatever gets returned from this function will be available as
// a prop to the Select-light container
function mapDispatchToProps(dispatch) {
  //Whenever selectLight is called, we need to pass down the action
  //to all the reducers in the application
  return bindActionCreators({selectLight : selectLight }, dispatch);
}

export default connect(null, mapDispatchToProps)(SelectLight);