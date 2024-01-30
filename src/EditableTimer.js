import { Component } from "react"
import { TimerForm } from "./TimerForm";
import { Timer } from "./Timer";

export class EditableTimer extends Component{

    state = {	editFormOpen: false,};

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
        console.log('render Method:'+ this.state.editFormOpen)
        if (this.state.editFormOpen) { 
            return (
              <TimerForm title={this.props.title} project={this.props.project} />
            );
        } else {
      return ( <Timer 
                    title={this.props.title} 
                    project={this.props.project} 
                    elapsed={this.props.elapsed} 
                    runningSince={this.props.runningSince} 
                    switchFn={this.switchTimer}
                    />
      ); }
      
    }
}