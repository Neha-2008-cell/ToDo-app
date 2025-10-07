import React , {useState , useEffect} from "react";
import Checkbox from "./Checkbox";
import CreateTodo from "./CreateTodo";

export default function Task({refresh , setRefresh}) {
    const [add, setAdd] = useState(false);
    const [ getTask, setGetTask ] = useState([]);
     const [ refresh2, setRefresh2 ] = useState(false);
    
    useEffect(() => {
        const getDataTask = JSON.parse(localStorage.getItem("saveTask") || "[]")
        setGetTask( getDataTask)
    },[refresh2]
   )
    
    const showHide = (props) => (setAdd(props))
   
    const hide = function (index) {
        const oldDone = JSON.parse(localStorage.getItem('doneTask')  || "[]")
        const done =[...oldDone , getTask[index] ]
        localStorage.setItem("doneTask", JSON.stringify(done))
        setRefresh(!refresh)
        getTask.splice(index,1)
        const newTask = [...getTask ]
        
        localStorage.setItem("saveTask" , JSON.stringify(newTask))
        }     
        
   // function updateLocalStorage({ setStoreData }){setStoreData(getTask)}

    return (
        <>
           <div className="flex flex-col gap-2">
           
            {getTask.length > 0 ? (getTask.map((task , index) => (
                  <div key={index} className="flex">
                    <Checkbox checked={false} readOnly  onClick={() => (hide(index))}/>
                    <p>{task}</p>
                  </div>
            ))) :  <div className="text-gray-400">No Todo's here !!</div>}   
           
            </div>
             {
            
            }
            <button onClick={() => (showHide(!add))} className="rounded-full font-semibold text-white p-2 px-4  hover:bg-yellow-600 bg-yellow-500"> +  Add a todo</button>
            {add && <CreateTodo showHide={showHide} refresh2={refresh2} setRefresh2={setRefresh2}/>}
         </>
    )
}

