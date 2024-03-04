import { Component } from "react";
import 'semantic-ui-css/semantic.min.css'
import { EditableTimerList } from "./EditableTimerList";
import { ToggleableTimerForm } from "./ToggleableTimerForm";
import { v4 } from "uuid";
import { createTimer } from "./Helpers";

export class TimerDashBoard extends Component {

    state = {
        timers: [
        {  title: 'Practice squat on Monday', 
           project: 'Gym Chores', 
           id: v4(),  
           elapsed: 0, 
           runningSince: null,
        },
        {   title: 'Bake squash',
             project: 'Kitchen Chores',  
             id: v4(), 
             elapsed: 0,  
             runningSince: null,
        }, 
    ],
    };

    startTimer = (timerid) => {
        
        this.setState({timers: this.state.timers.map( (t) => {
            if(t.id === timerid){  
               return Object.assign({}, t, {runningSince: Date.now()}) 
            } 
            return t;
       } )})
        
    }

    deleteTimer = (timerid) => {
        
        this.setState({timers: this.state.timers.filter( (t) => {
            if(t.id !== timerid){  
                return t;
            } 
       } )})
        
    }

    stopTimer = (timerId) => {
        const now = Date.now();
        this.setState({
          timers: this.state.timers.map((timer) => {
            if (timer.id === timerId) {
              const lastElapsed = now - timer.runningSince;
              return Object.assign({}, timer, {
                elapsed: timer.elapsed + lastElapsed,
                runningSince: null,
              });
            } else {
              return timer;
    } }),
    }); };
    
    
    onHandleEditSubmit = (td) => {
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

    onHandleCreateSubmit = (td) => {
        const ti = createTimer(td);
        this.setState({timers: this.state.timers.concat(ti) })
    }

    render(){
        return(
        <div className='ui three column centered grid'>
            <div className='column'>
            <EditableTimerList
                onHandleSubmit={this.onHandleEditSubmit}
                timers={this.state.timers}
                onStartTimer={this.startTimer}
                onStopTimer={this.stopTimer}
                onDeleteTimer={this.deleteTimer}
                />
            <ToggleableTimerForm
                onHandleSubmit={this.onHandleCreateSubmit} 
                isOpen={false} />
            </div>
        </div>
        );
    }

}