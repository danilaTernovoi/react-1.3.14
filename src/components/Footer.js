import React, { Component } from "react"
import TasksFilter from "./TasksFilter"
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">{this.props.count} items left</span>

        <TasksFilter
          currentFilter={this.props.currentFilter}
          setCurrentFilter={this.props.setCurrentFilter}
        />

        <button className="clear-completed" onClick={this.props.clearCompleted}>
          Clear completed
        </button>
      </footer>
    )
  }
}

export default Footer
