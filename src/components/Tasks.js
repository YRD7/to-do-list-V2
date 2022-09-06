import Task from "./Task";
const Tasks = ({tasks,onDelete,onMark,onEdit}) => {
  return (
    
   <> {
        tasks.map((task)=>(<Task key={task.id} task={task} onDelete={onDelete} onMark={onMark} onEdit={onEdit}/>
        ))
    }
    </>
  )
}

export default Tasks