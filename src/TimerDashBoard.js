import { Component } from "react";
import 'semantic-ui-css/semantic.min.css'
import { EditableTimerList } from "./EditableTimerList";
import { ToggleableTimerForm } from "./ToggleableTimerForm";

export class TimerDashBoard extends Component {

    state = {
        timers: [
        {  title: 'Practice squat on Monday', 
           project: 'Gym Chores', 
           //id: v4(),  
           elapsed: 5456099, 
           runningSince: Date.now(),
        },
        {   title: 'Bake squash',
             project: 'Kitchen Chores',  
             //id: v4(), 
             elapsed: 1273998,  
             runningSince: null,
        }, 
    ],
    };
    

    render(){
        return(
        <div className='ui three column centered grid'>
            <div className='column'>
            <EditableTimerList timers={this.state.timers} />
            <ToggleableTimerForm isOpen={false} />
            </div>
        </div>
        );
    }

}