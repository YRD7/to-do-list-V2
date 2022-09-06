import './App.css';
import Header from './components/Header';
import {useState} from "react"
import Tasks from './components/Tasks';
import TaskCounter from './components/TaskCounter';

function App() {
  //states
  const [tasks,setTasks]=useState([
    
  ])
  const [inputList,setInput]=useState("")
  const [toggleState,settoggleState]=useState(false)
  const [idUpdated,setIdUpdated]=useState(null)
  const [buttonName,setButtonName]=useState("Save Task")

  //delete Task
  const deleteTask=(id)=>{
   setTasks(tasks.filter((task)=>task.id!==id))
  }
  
  // creating input functionality
  const addTask=(task)=>{
   
    if(!inputList){
      alert("please add Task")
      return
        }
   else if(toggleState===true){
      setTasks(
      tasks.map((elem)=>{
        
        if(elem.id===idUpdated)
        {
          return {...elem,inputList:inputList}
        }
        return elem
      })
    )
    setButtonName("Save Task")
    settoggleState(false)
    setInput("")


}
    else{
    
    const id=Math.floor(Math.random()*10000)+1
    const state=false
    const newTask = {id,state,...task,state}
    setTasks([...tasks,newTask])
    setInput("")
    }
  }
  const itemEvent=(e)=>{
    setInput(e.target.value)
  }
  //adding imp mark onclick (color change)
  const markImportant=(task,target)=>{
    if(task.state===false){
    target.target.style.color="#FEDD00"
    task.state=true
    }
    else{
    target.target.style.color=""
    task.state=false
    }
  }
  //editing the existing task
  const onEdit=(id,text)=>{
    //console.info(id,text)
    let newEditItem=tasks.find((elem)=>
    {
      return elem.id===id
    }
   
    )
    setInput(newEditItem.inputList)
    settoggleState(true)
    console.info(newEditItem.id,"settoggleState.id");
    setIdUpdated(newEditItem.id)
    setButtonName("Edit Task")
  }
  return (
    //outerbody
    <div className='containerbody'>
  {
    // header container
  }
    <div className='container'>
    <Header/>
    </div>
    <div className='counter'><TaskCounter taskLength={tasks.length}/></div>
    {/* <AddTask onAdd={addTask}/> */}
    <input className='input-Box' id="inputBox" type="text" placeholder="AddTask" value={inputList} onChange={itemEvent} />
    <button className="btn btn-block" onClick={()=>addTask({inputList})}>
      {buttonName}
    </button>
    {tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask} onMark={markImportant} onEdit={onEdit} />):("Please create a task")}
    
    </div>
  );
}

export default App;
