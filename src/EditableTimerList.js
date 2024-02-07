import { Component } from "react";
import { EditableTimer } from "./EditableTimer";

export class EditableTimerList extends Component{

    handleStartTimer = (timerid) => {
       
        this.props.onStartTimer(timerid);
    }
    handleStopTimer = (timerid) => {
      
        this.props.onStopTimer(timerid);
    }
    render(){
        let timers = this.props.timers.map(
            (t) => (
                <div>
  
                <EditableTimer 
                     title={t?.title} 
                     project={t?.project} 
                     id={t?.id}
                     onHandleSubmit={this.props.onHandleSubmit}
                     elapsed={t?.elapsed} 
                     runningSince={t?.runningSince} 
                     editFormOpen={t?.editFormOpen}
                     onStartTimer={this.handleStartTimer}
                     onStopTimer={this.handleStopTimer}
                     /> 
                </div>

            )
        )

        return (<div id='timers'>
                {timers}
                </div>
    ); 

    }
}