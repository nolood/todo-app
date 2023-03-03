import React, { useState } from 'react';
import Taskitem from './Taskitem';

const Tasklist = ({ tasks, setTasks }) => {

  const [active, setActive] = useState(false);
  const [sortActive, setSortActive] = useState(false);
  const [sortComp, setSortComp] = useState(false);

  const activateAll = () => {
    setSortActive(false)
    setSortComp(false)
    if (active) {
      const updatedTasks = tasks.map((task) => {
        return {
          ...task,
          checked: false
        };
      });
      setTasks(updatedTasks);
    } else {
      const updatedTasks = tasks.map((task) => {
        return {
          ...task,
          checked: true
        };
      });
      setTasks(updatedTasks);
    }
    setActive(!active)
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((item) => !item.checked))
  }

  return (
    <div className="tasklist">
      { sortActive && !sortComp 
        ? 
          tasks.map((task) => (
            !task.checked ? <Taskitem key={`${task.id}-${task.checked} ${task.id}`} task={task} tasks={tasks} setTasks={setTasks} /> : <></>
          ))
        :
          !sortActive && sortComp 
          ?
            tasks.map((task) => (
              task.checked ? <Taskitem key={`${task.id}-${task.checked} ${task.id}`} task={task} tasks={tasks} setTasks={setTasks} /> : <></>
            ))
          :
            !sortActive && !sortComp
            ?
              tasks.map((task) => (
                <Taskitem key={`${task.id}-${task.checked} ${task.id}`} task={task} tasks={tasks} setTasks={setTasks} />
              ))
            : 
            sortActive && sortComp
            ?
              tasks.map((task) => (
                <Taskitem key={`${task.id}-${task.checked} ${task.id}`} task={task} tasks={tasks} setTasks={setTasks} />
              ))
            : <></>
            
      }
      {tasks.length > 0 ? (
        <div className="downpanel">
          <span>{tasks.length} items left</span>
          <div className="downpanel__menu">
            <span onClick={activateAll} className="downpanel__active all">
              All
            </span>
            <span onClick={() => setSortActive(!sortActive)} className="downpanel__active">Active</span>
            <span onClick={() => setSortComp(!sortComp)} className="downpanel__active">Completed</span>
          </div>
          <span onClick={() => clearCompleted()} className="downpanel__active">Clear Completed</span>
        </div>
      ) : (
        <></>
      )}
      {tasks.length > 0 ? (
        <>
          <div className="downpanel__mobile">
            <span>{tasks.length} items left</span>
            
            <span onClick={() => clearCompleted()} className="downpanel__active">Clear Completed</span>
          </div>
          <div className='downpanel__mobile center'>
            <div className="downpanel__menu">
              <span onClick={activateAll} className="downpanel__active all">
                All
              </span>
              <span onClick={() => setSortComp(!sortComp)} className="downpanel__active">Active</span>
              <span onClick={() => setSortActive(!sortActive)} className="downpanel__active">Completed</span>
            </div>
          </div>
        </>
        
      ) : (
        <></>
      )}
    </div>
  );
};

export default Tasklist;