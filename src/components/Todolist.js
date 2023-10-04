import { useState } from "react";

export const Todolist = () => {

const [tasks,setTasks] = useState([]);
const [newTask,setNewTask]= useState('');

const addTask =() => {
const task={
    id: Date.now(),
    text: newTask,
    completed:false,
}
setTasks([...tasks,task]);
setNewTask('');
console.log(tasks)
}
const deleteTask=(taskid)=>{

const updatedTasks=tasks.filter((task)=> task.id !== taskid );
setTasks(updatedTasks);
}

const completedTask=(taskid)=>{

setTasks((previousTask)=> previousTask.map((task)=>
task.id=== taskid ? {...TextTrackList,completed :  !task.completed}: task))
}

  return (
    <div>
        <h1>Todo page</h1>
      <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} />
      <button onClick={addTask} >Add</button> 
      {/* <ul>
        {tasks.map((task)=>{
            <div>

<li key={task.id}> 
{task.text}<button onClick={()=>deleteTask(task.id)}>delete</button>
</li>
</div>

        })}
      </ul> */}
<div className="container">
      <ul>
  {tasks.map((task) => (
    
      <li key={task.id} style={{TextDecoration : task.completed ? "line-through": "none"}}>
        <input type="checkbox" checked={task.completed} onChange={()=>completedTask(task.id)}/>
        {task.text}
        <button   style={{
    width: '80px',         // Set the desired width
    height: '32px',        // Set the desired height
    backgroundColor: '#dc3545',  // Background color
    color: 'white',        // Text color
    border: 'none',        // Remove the border
    // borderRadius: '50%',   // Make it circular
    cursor: 'pointer',    // Change cursor on hover
    marginLeft: '10px',    // Add left margin
    display: 'flex',       // Center the text horizontally and vertically
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
  }}
  onClick={() => deleteTask(task.id)}>delete</button>
      </li>
   
  ))}
</ul>
</div>
    </div>
  )
  }
