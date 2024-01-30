import { Component } from "react";
import { EditableTimer } from "./EditableTimer";

export class EditableTimerList extends Component{
    render(){
        let timers = this.props.timers.map(
            (t) => (
                <EditableTimer 
                     title={t.title} 
                     project={t.project} 
                     elapsed={t.elapsed} 
                     runningSince={t.runningSince} 
                     editFormOpen={t.editFormOpen}/> 
            )
        )

        return (<div id='timers'>
                {timers}
                </div>
    ); 

    }
}