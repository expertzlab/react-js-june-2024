import { useState } from "react";
import { EditableTimerList } from "./EditableTimerList";

function TimerDashBoard(){

    const [state, setState] = useState([
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
    ],)

    return <div>
        <EditableTimerList timers={state} />
        </div>
}
