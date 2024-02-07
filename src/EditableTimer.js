import { Component } from "react"
import { TimerForm } from "./TimerForm";
import { Timer } from "./Timer";

export class EditableTimer extends Component{

    state = {	editFormOpen: false,};

    handleStartTimer = (timerid) => {
        this.props.onStartTimer(timerid);
    }
    handleStopTimer = (timerid) => {
        this.props.onStopTimer(timerid);
    }
    switchTimer = () => {
        
        if(this.state.editFormOpen){
            this.setState({editFormOpen:false}) 
        } else {
            this.setState({editFormOpen:true}) 
        }
        console.log('switch function called flag: '+ 
                this.state.editFormOpen)
    }

    render(){
        
        if (this.state.editFormOpen) { 
            return (
              <TimerForm 
                title={this.props.title} 
                id={this.props.id}
                onHandleSubmit={this.props.onHandleSubmit}
                switchTimer={this.switchTimer}
                project={this.props.project} />
            );
        } else {
      return ( <Timer 
                    title={this.props.title} 
                    id={this.props.id}
                    project={this.props.project} 
                    elapsed={this.props.elapsed} 
                    runningSince={this.props.runningSince} 
                    switchFn={this.switchTimer}
                    onStartTimer={this.handleStartTimer}
                    onStopTimer={this.handleStopTimer}
                    />
      ); }
      
    }
}