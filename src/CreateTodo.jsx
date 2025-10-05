import React from "react";

export default function CreateTodo ({showHide}) {
   
   const cancel = () => (showHide(false))

    return (
        <>
            <div className="flex flex-col items-start gap-5 border border-gray-100 border-2 w-300 p-10 rounded-md ">
            <h1 className="text-xl font-medium">Create a todo</h1>
            <input className="w-100 border border-gray-300 p-2 rounded-md focus:border-yellow-500 focus:border-2 focus:outline-none" placeholder="Write an article about XState"/>
           <div className="flex gap-4">
            <button className="rounded-md font-semibold text-white p-2 px-4  hover:bg-yellow-600 bg-yellow-500">Save</button>
            <button onClick={cancel} className=" border border-gray-300 p-2 rounded-md px-4">Cancel</button>
           </div>
            </div>
        </>
    )
}

