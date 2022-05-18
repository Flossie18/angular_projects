export class Task {
    id?:number;
    deadline?: string;
    description?: string;
    status_id?: number;
    
    constructor(props:object = {}){
        Object.assign(this,props);
    }
}

