import React, { useEffect, useState } from 'react';
import { useTheme } from './hooks/use-theme';
import moon from './assets/icon-moon.svg';
import sun from './assets/icon-sun.svg';
import Tasklist from './components/Tasklist';

const App = () => {
  const { theme, setTheme } = useTheme()

  const [title, setTitle] = useState('');

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const raw = localStorage.getItem('tasks') || []
    setTasks(JSON.parse(raw))
  }, [])

  const changeThemeDark = () => {
    setTheme('light')
  }

  const changeThemeLight = () => {
    setTheme('dark')
  }

  const addNewTask = (e) => {
    if (title !== ''){
      e.preventDefault()
      const newTask = {
        id: Date.now(),
        title,
        checked: false,
      }
      setTasks([...tasks, newTask])
      setTitle('')
    }
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className='section'>
      <div className='section-dop'></div>
      <div className='container'>
        <div className='title'>
          <span className='title__text'>TODO</span>
          {theme === 'dark' ? 
            <img onClick={() => changeThemeDark()} className='title__img' src={sun} alt=''/> 
            : 
            <img onClick={() => changeThemeLight()} className='title__img' src={moon} alt=''/> 
          }
        </div>
        <div className='input'>
          <form className='input__form'>
            <div className='input__leftbar'>
              <button onClick={e => addNewTask(e)} className='input__leftbar-circle'></button>
            </div>
            <input onChange={e => setTitle(e.target.value)} value={title} className='input__area' type='text' placeholder='Create a new todo...'/>
          </form>
        </div>
        <Tasklist tasks={tasks} setTasks={setTasks}/>
        <div className='bottom__title-wrapper'>
          {/* <span className='bottom__title'>Drag and drop to reorder list</span> */}
        </div>
      </div>
    </div>
  );
};

export default App;