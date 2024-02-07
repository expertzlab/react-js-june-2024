import { Component } from "react";

export class TimerActionButton extends Component{

    handleStartTimer = () => {
        this.props.onStartTimer();
    }
    handleStopTimer = () => {
        this.props.onStopTimer();
    }

    render(){
        if(this.props.runningSince === false){
            
        return <div 
                onClick={this.handleStartTimer}
                className='ui bottom attached green basic button'> Start </div>
        }
        else{
            return <div 
                    onClick={this.handleStopTimer}
                    className='ui bottom attached red basic button'> Stop </div>
        }
    }
}