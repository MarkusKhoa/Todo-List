import Header from './components/Header'
import { useState } from 'react'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        name: 'Doctors appointment',
        date: 'May 1st at 2:30pm',
        reminder: 'true',
    },
    {
        id: 2,
        name: 'Meeting at school',
        date: 'May 2nd at 3:00pm',
        reminder: 'false',
    },
    {
        id: 3,
        name: 'Skincare shopping',
        date: 'May 3rd at 4:00pm',
        reminder: 'false',
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return(
    <div className="container">
      <Header title='To do list'/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />):('No tasks available')}
    </div>
  )
}

export default App;