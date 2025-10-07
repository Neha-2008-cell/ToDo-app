import React , {useEffect , useState} from "react";
import Checkbox from "./Checkbox";
import { RiDeleteBinLine } from "react-icons/ri";
export default function Done ({refresh}) {
    const [ doneTask, setDoneTask ] = useState([]);
    const [ remove, setRemove ] = useState(false);
    
    
    
   function deleteTask (index){
      doneTask.splice(index,1)
        const newTask = [...doneTask ]
        localStorage.setItem("doneTask" , JSON.stringify(newTask))
          setRemove(!remove)
   }
   
   useEffect(() => {
      const getDoneTask = JSON.parse(localStorage.getItem('doneTask') || '[]') 
      setDoneTask(getDoneTask)
   },[refresh , remove ]
   )
    return (
        <>
     <div className="flex flex-col gap-2">
        {doneTask.length > 0 ? doneTask.map((task , index) => (
          <div key={index} className="flex ">
              
              <Checkbox checked='checked' readOnly />
               <a onClick={()=>deleteTask(index)} ><RiDeleteBinLine className="text-xl m-1"/></a>
              <p>{task}</p>
             
              
          </div>
        )) : <div className="text-gray-400">No Todo's here !!</div>
     } 
         
     </div>       
        </>
    )
}
