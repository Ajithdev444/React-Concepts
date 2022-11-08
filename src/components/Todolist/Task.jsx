export const Task = (props) =>{
    return(
        <div  style={{backgroundColor: props.completed ? 'green' : 'white'}}>
            <h1>{props.taskName}</h1>
            <button onClick={()=>props.deletetask(props.id)}>X</button>
            <button onClick={()=>props.taskCompleted(props.id)}>completed</button>
        </div>
    )
}