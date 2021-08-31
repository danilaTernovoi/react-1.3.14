import React, { Component } from "react"

class Task extends Component {
  render() {
    const { desc, created, mod } = this.props.task
    const { deleteSelf, toggleCompletedSelf } = this.props

    return (
      <li className={mod}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={mod === "completed"}
            onChange={toggleCompletedSelf}
          />
          <label>
            <span className="description">{desc}</span>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={deleteSelf}></button>
        </div>
        {mod === "editing" && (
          <input type="text" className="edit" value="Editing task" />
        )}
      </li>
    )
  }
}

export default Task
