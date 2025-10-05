import React , {useState} from "react";
import Checkbox from "./Checkbox";
import CreateTodo from "./CreateTodo";

export default function Task() {
    const [ add, setAdd ] = useState(false);
    const showHide = (props) => (setAdd(props))
    
    return (
        <>
           <div>
            <div className="flex">
            <Checkbox />
            <p>Clean my computer</p>
            </div>
            <div className="flex">
            <Checkbox />
            <p>Buy a keyboard</p>
            </div>
            </div>
            <button onClick={() => (showHide(!add))} className="rounded-full font-semibold text-white p-2 px-4  hover:bg-yellow-600 bg-yellow-500"> +  Add a todo</button>
            {add && <CreateTodo showHide={showHide } />}
         </>
    )
}

