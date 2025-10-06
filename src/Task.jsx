import React , {useState} from "react";
import Checkbox from "./Checkbox";
import CreateTodo from "./CreateTodo";

export default function Task() {
    const [add, setAdd] = useState(false);
    const [show, setShow] = useState(true);
    
    const getTask = JSON.parse(localStorage.getItem("saveTask") ) || []
    
    const showHide = (props) => (setAdd(props))
    const hide = () => (setShow(false))

    return (
        <>
           <div>
            {show && <div className="flex">
                    <Checkbox onClick={hide} />
                    <p>Clean my computer</p>
                </div>}

            <div className="flex">
            <Checkbox />
            <p>Buy a keyboard</p>
            </div>
           
            {getTask.map((task , index) => (
                 <div key={index} className="flex">
                    <Checkbox />
                    <p>{task}</p>
                </div>))}   
           
            </div>
            <button onClick={() => (showHide(!add))} className="rounded-full font-semibold text-white p-2 px-4  hover:bg-yellow-600 bg-yellow-500"> +  Add a todo</button>
            {add && <CreateTodo showHide={showHide } />}
         </>
    )
}

