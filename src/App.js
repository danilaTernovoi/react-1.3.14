import React, { Component } from "react"

import NewTaskForm from "./components/NewTaskForm"
import TaskList from "./components/TaskList"
import Footer from "./components/Footer"

import { ACTIVE, COMPLETED } from "./constants"
import { MOCK_CREATED } from "./constants"

class App extends Component {
  state = {
    currentFilter: "all",
    tasks: [
      {
        id: `${Date.now()}-Active`,
        desc: "Active",
        created: MOCK_CREATED,
        mod: ACTIVE,
      },

      {
        id: `${Date.now()}-Completed`,
        desc: "Completed",
        created: MOCK_CREATED,
        mod: COMPLETED,
      },

      {
        id: `${Date.now()}-Editing`,
        desc: "Editing",
        created: MOCK_CREATED,
        mod: ACTIVE,
      },
    ],
  }

  createTask = (desc) => {
    const newTask = {
      desc,
      id: `${Date.now()}-${desc}`,
      created: MOCK_CREATED,
      mod: ACTIVE,
    }

    this.setState((state) => {
      return {
        tasks: [...state.tasks, newTask],
      }
    })
  }

  toggleCompleted = (id) => {
    const toggledTask = this.state.tasks.find((task) => task.id === id)
    toggledTask.mod = toggledTask.mod === ACTIVE ? COMPLETED : ACTIVE
    this.forceUpdate()
  }

  deleteTask = (id) => {
    this.setState((state) => {
      return {
        tasks: state.tasks.filter((task) => task.id !== id),
      }
    })
  }

  clearCompleted = () => {
    this.setState((state) => {
      return {
        tasks: state.tasks.filter((task) => task.mod !== COMPLETED),
      }
    })
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>

          <NewTaskForm onCreate={this.createTask} />
        </header>

        <section className="main">
          <TaskList
            list={this.state.tasks.filter((task) => {
              return this.state.currentFilter === "all"
                ? task
                : task.mod === this.state.currentFilter
            })}
            onToggleCompleted={this.toggleCompleted}
            onDeleteTask={this.deleteTask}
          />

          <Footer
            count={this.state.tasks.length}
            currentFilter={this.state.currentFilter}
            setCurrentFilter={(newFilter) =>
              this.setState({ currentFilter: newFilter })
            }
            clearCompleted={this.clearCompleted}
          />
        </section>
      </section>
    )
  }
}

export default App
