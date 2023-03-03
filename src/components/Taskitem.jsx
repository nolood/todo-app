import React, { useState } from 'react';
import cross from './../assets/icon-cross.svg';
const Taskitem = ({task, tasks, setTasks}) => {
  const [checked, setChecked] = useState(task.checked)

  const checkboxChanged = () => {
    if (checked === true) {
      setChecked(false)
      task.checked = false
      localStorage.setItem('tasks', JSON.stringify(tasks))
    } else {
      setChecked(true)
      task.checked = true
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }

  const delItem = () => {
    setTasks(tasks.filter((item) => item.id !== task.id))
  }

  // const [currentItem, setCurrentItem] = useState(null)

  // const dragStartHandler = (e) => {
  //   setCurrentItem(task)
  // }

  // const dragLeaveHandler = (e) => {
    
  // }

  // const dragEndHandler = (e) => {

  // }

  // const dragOverHandler = (e) => {
  //   e.preventDefault()
  // }

  // const dropHandler = (e) => {

  // }

  // onDragStart={(e) => dragStartHandler(e, task)}
  //     onDragLeave={(e) => dragLeaveHandler(e)}
  //     onDragEnd={(e) => dragEndHandler(e)}
  //     onDragOver={(e) => dragOverHandler(e)}
  //     onDrop={(e) => dropHandler(e, task)}
  //     draggable={true}

  return (
    
    <div
      className='taskitem'
      
    >
      <div className='checkbox'>
        <label>
          <input type="checkbox" className='real-checkbox' checked={checked} onChange={() => checkboxChanged()}/>
          <div className='custom-checkbox-wrap'>
            <div className='custom-checkbox'></div>
          </div>
          <span className={checked ? 'taskitem__title lined' : 'taskitem__title'}>{task.title}</span>
        </label>
      </div>
      <img onClick={() => delItem()} className='cross' src={cross} alt="" />
    </div>
  );
};

export default Taskitem;