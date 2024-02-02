import { Component } from "react";
import 'semantic-ui-css/semantic.min.css'
import { EditableTimerList } from "./EditableTimerList";
import { ToggleableTimerForm } from "./ToggleableTimerForm";
import { v4 } from "uuid";

export class TimerDashBoard extends Component {

    state = {
        timers: [
        {  title: 'Practice squat on Monday', 
           project: 'Gym Chores', 
           id: v4(),  
           elapsed: 5456099, 
           runningSince: Date.now(),
        },
        {   title: 'Bake squash',
             project: 'Kitchen Chores',  
             id: v4(), 
             elapsed: 1273998,  
             runningSince: null,
        }, 
    ],
    };
    
    onHandleSubmit = (td) => {
        this.setState({
            timers: this.state.timers.map((t) => {
                console.log('t:'+t,'td:'+td)
                if(t.id == td.id ){
                   return Object.assign({}, t,
                        {title: td.title, project:  td.project});
                        
                } else {
                    return t;
                    
                }
            })
        })
    }

    render(){
        return(
        <div className='ui three column centered grid'>
            <div className='column'>
            <EditableTimerList
                onHandleSubmit={this.onHandleSubmit}
                timers={this.state.timers} />
            <ToggleableTimerForm
                onHanldeSumbit={this.onHandleSubmit} 
                isOpen={false} />
            </div>
        </div>
        );
    }

}