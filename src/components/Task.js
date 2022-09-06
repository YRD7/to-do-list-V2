import { RiTaskFill } from 'react-icons/ri'
import { AiFillStar} from 'react-icons/ai'
import { AiOutlineEdit} from 'react-icons/ai'
import CurrentDate from './CurrentDate'
const Task = ({task,onDelete,onMark,onEdit}) => {
  return (
    <div className="task">
    <h3><AiFillStar onClick={(e)=>{onMark(task,e)}}/>
   <div className="text-container">{task.inputList}</div> 
    <div className='function-container'><RiTaskFill style={{color:"green"}} onClick ={()=>onDelete(task.id)}/>
    <AiOutlineEdit onClick={()=>onEdit(task.id,task.text)}/></div>
    </h3>
    <p><CurrentDate/></p>
    </div>
  )
}

export default Task