import React, { Component } from "react"
import { ACTIVE, COMPLETED } from "../constants"
import { upperFirstLetter } from "../upperFirstLetter"
class TasksFilter extends Component {
  render() {
    const filters = ["all", ACTIVE, COMPLETED]
    const { currentFilter, setCurrentFilter } = this.props

    return (
      <ul className="filters">
        {/* selected */}
        {filters.map((filter) => {
          return (
            <li key={filter}>
              <button
                onClick={() => setCurrentFilter(filter)}
                className={filter === currentFilter ? "selected" : ""}
              >
                {upperFirstLetter(filter)}
              </button>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default TasksFilter
