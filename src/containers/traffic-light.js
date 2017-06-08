import React, { Component } from 'react';
import { connect } from 'react-redux';

class TrafficLight extends Component {
  constructor(props) {
    super(props);
	this.timer=26;
	this.counter=0;	
	
  }
  
  componentDidMount() {
    setInterval(()=> {
		this.changeLight();
	}, 1000);	
  }
  
  changeLight() {		
		let currTrafficLight = document.querySelector('.trafficLight');	
		let timer = document.querySelector('.timer');
		
		if(this.timer == 26 || this.timer==25) {
			 currTrafficLight.style.background="red";
			 this.timer=1;
			 this.counter=1
		}
		if(this.timer==10 || this.timer== 23) {
			 currTrafficLight.style.background="yellow";
			 this.counter=1
			
		}
		if(this.timer==13) {
			 this.counter=1
			 currTrafficLight.style.background="green";
		}			
		timer.innerHTML=this.counter++; 
		this.timer+=1;		 
  }
  
  onClickLight(light){
		if(light=="RED"){
			this.timer=26;
		} else if(light=="GREEN"){
			this.timer=13;
		} else{
			this.timer=23;
		}		
  }
  
  render() {       
	    this.onClickLight(this.props.selectedLight);
		return (
			<div>			    
			    <div className="bold">Traffic Light</div>							    
				<div className="trafficLight red-bgColor" ></div>
				<div className="timer" ></div>
			</div>			
	    );
  }
}

//whatever gets returned from here will be available as props in trafic-light
// container
function mapStateToProps({selectedLight}) {
  return {
    selectedLight
  }
}

export default connect(mapStateToProps)(TrafficLight);