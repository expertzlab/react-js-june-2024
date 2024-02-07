import { v4 } from "uuid"

export function createTimer(td){
    return Object.assign({}, {
        id: v4(), 
        title: td.title,
        project: td.project,
        elapsed: td.elapsed,
        runningSince : Date.now()
    })
}
