import './App.css'
import Done from './Done'
import Task from './Task'
function App() {

  return (
    <>
      <div className='flex items-start'>
        <h1 className='font-medium text-xl'>XTodo</h1>
        </div>
      <hr className='w-full border border-gray-100 mb-15 mt-5'/>
      <div className='flex gap-5 flex-col items-start'>
        <h1 className='text-4xl mb-5 font-bold'>Things to get done</h1>
        <p className='font-semibold text-xl'>Things to do</p>
        <Task />
        <p className='font-medium text-xl'>Things done</p>
        <Done/>
      </div>
    </>
  )
}

export default App
