import React from 'react'
import { useState } from 'react'

function Demo3() {
    const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(''); 
    }
  };

  return (
    <div className='h-[60vh] flex justify-center items-center flex-col gap-10'>
        <h1 className='text-4xl text-center text-secondary'>Live Demo 3</h1>
     <div className="flex">
     <input type="text" value={task} onChange={handleInputChange} placeholder="Enter a task" className='text-2xl p-4 mx-4 outline outline-teal-400 focus:outline-teal-700 outline-2 rounded-lg'/>
     <button onClick={addTask} className='bg-primary p-3 text-xl font-semibold rounded-lg'>Add Task</button>
     </div>
      <ol>
        {tasks.map((t, index) => (
          <li key={index} className='text-xl'>{t}</li>
        ))}
      </ol>
    </div>
  );
}
export default Demo3
