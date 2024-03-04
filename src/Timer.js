import { Component } from "react";
import { TimerActionButton } from "./TimerActionButton";

import {renderElapsedString} from './Helpers'

export class Timer extends Component{

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 500);
     }
    
    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }

    handleStartTimer = () => {
        this.props.onStartTimer(this.props.id)
        
    }
    handleStopTimer = () => {
        this.props.onStopTimer(this.props.id)
    }

    handleDeleteTimer = () => {
        this.props.onDeleteTimer(this.props.id)
    }

    render(){
        
    return (
    <div className='ui centered card'>
      <div className='content'> 
      <div className='header'> 
      {this.props.title} 
      </div>
    <div className='meta'> {this.props.project}</div>
    <div className='center aligned description'>
        <h2>{renderElapsedString(this.props.elapsed, this.props.runningSince) }</h2> </div>
      	<div className='extra content'>
            <span onClick={this.props.switchFn} className='right floated edit icon'>
                <i className='edit icon' />
            </span>
        	<span onClick={this.handleDeleteTimer} className='right floated trash icon'>
                <i className='trash icon' />
            </span> 
        </div> 	
    </div>
    	<TimerActionButton 
        runningSince={!!this.props.runningSince}
        onStartTimer={this.handleStartTimer} 
        onStopTimer={this.handleStopTimer} 
        />
    </div>); 
    }
}