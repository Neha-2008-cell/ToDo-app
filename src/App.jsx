import './App.css'
import { useState } from 'react';
import Done from './Done'
import Task from './Task'
function App() {
 const [ refresh, setRefresh ] = useState(false);


  return (
    <>
      <div className='flex items-start'>
        <h1 className='font-medium text-xl'>XTodo</h1>
        </div>
      <hr className='w-full border border-gray-100 mb-15 mt-5'/>
      <div className='flex gap-5 flex-col items-start'>
        <h1 className='text-4xl mb-5 font-bold'>Things to get done</h1>
        <p className='font-medium text-xl'>Things to do</p>
        <Task refresh={refresh } setRefresh={setRefresh } />
        <p className='font-medium text-xl'>Things done</p>
        <Done refresh={refresh } />
      </div>
    </>
  )
}

export default App;

//cd ~/Desktop/ToDo-app/my-app

// let getdata = localStorage.getItem("cartstorage") || "{}"
//   let cartobject = JSON.parse(getdata)
//   let[cart,setcart] = useState(cartobject)          
  
//   function handleCart(id, count) {
//     const oldCount = cart[id] || 0
//     const newCart = { ...cart, [id]: oldCount + count }
//     updateCart(newCart)
//   }

//   function updateCart(newCart) {
//     setcart(newCart);
//     let cartstring = JSON.stringify(newCart)
//     localStorage.setItem("cartstorage",cartstring)
//  }

