import { Component } from "react";

export class Timer extends Component{

    render(){
        let elapsedString = "1:1:10"
    return (
    <div className='ui centered card'>
      <div className='content'> 
      <div className='header'> 
      {this.props.title} 
      </div>
    <div className='meta'> {this.props.project}</div>
    <div className='center aligned description'>
        <h2>{elapsedString}</h2> </div>
      	<div className='extra content'>
            <span onClick={this.props.switchFn} className='right floated edit icon'>
                <i className='edit icon' />
            </span>
        	<span className='right floated trash icon'>
                <i className='trash icon' />
            </span> 
        </div> 	
    </div>
    	<div className='ui bottom attached blue basic button'> Start </div>
    </div>); 
    }
}