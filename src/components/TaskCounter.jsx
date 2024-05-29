import React from 'react'

const TaskCounter = ({totalTasks, completedTasks}) => {
  return (
    <div>
        <div className="border text-bodycolor space-x-2 rounded-3xl border-bodycolor p-5 flex w-full">
          <div className="px-10 py-10 items-center justify-center">
            <b className="text-2xl">Todo Done</b>
            <br />
            <h3 className="text-xs leading-none">keep it up</h3>
          </div>
          <div className="flex border px-10 py-10 w-32 h-32 rounded-full text-black text-xl items-center justify-center border-orange bg-orange">
            <b>{completedTasks}/{totalTasks}</b> 
          </div>
    </div>
    </div>
  )
}

export default TaskCounter