import { useState } from "react"
import { Task } from "./Task"

const Todolist = () => {
    const [toDoList, setToDoList] = useState([])
    const [newTask, setNewTask] = useState('')
    const handleChange = (e) => {
        setNewTask(e.target.value)
    }
    const task = () => {
        const task = {
            id: toDoList.length === 0 ? 1 : toDoList[toDoList.length-1].id +1,
            taskName: newTask,
            completed:false,
        }
        const newToDoList = [...toDoList, task]
        setToDoList(newToDoList)
    }
    const deletetask = (id) => {
        const newDeleteTask = toDoList.filter((task) =>{
            return task.id !== id
        })
        setToDoList(newDeleteTask)
    }

    const taskCompleted = (id) => {
      setToDoList(
        toDoList.map((task) =>{
            if(task.id === id){
                return{...task, completed:true};
            }else{
                return task;
            }
        })
      )
    }
    return (
        <div>
            <div>
                <input onChange={handleChange} type='text'/>
                <button onClick={task} >AddTask</button>
            </div>
            <div>{toDoList.map((task) =>{
                return(
                   <Task
                    taskName={task.taskName} 
                    id={task.id}
                    deletetask={deletetask}
                    taskCompleted={taskCompleted}
                    completed={task.completed}
                    />
                )
            })}</div>
        </div>
    )
}
export default Todolist