import React, { Component, Fragment } from "react"
import Task from "./Task"

class TaskList extends Component {
  render() {
    const { list, onToggleCompleted, onDeleteTask } = this.props

    return (
      <ul className="todo-list">
        {list.map((task) => {
          return (
            <Fragment key={task.id}>
              <Task
                task={task}
                deleteSelf={() => onDeleteTask(task.id)}
                toggleCompletedSelf={() => onToggleCompleted(task.id)}
              />
            </Fragment>
          )
        })}
      </ul>
    )
  }
}

export default TaskList
