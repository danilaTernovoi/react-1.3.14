import React, { Component } from "react"
import { upperFirstLetter } from "../upperFirstLetter"
class NewTaskForm extends Component {
  state = {
    value: "",
  }

  changeHandler = (e) => {
    this.setState({ value: e.target.value })
  }

  keydownHandler = (e) => {
    if (e.key === "Enter") {
      const { onCreate: createTask } = this.props
      createTask(upperFirstLetter(this.state.value))
      this.setState({ value: "" })
    }
  }

  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={this.state.value}
        onChange={this.changeHandler}
        onKeyDown={this.keydownHandler}
      />
    )
  }
}

export default NewTaskForm
