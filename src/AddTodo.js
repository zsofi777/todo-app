import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this._inputElement.value !== "") {
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }
}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a new todo:</label>
        <div class="input-field">         
          <input type="text" ref={(a) => this._inputElement = a} placeholder="enter task" onChange={this.handleChange} value={this.state.content} />
          <button type="submit" onClick={this.handleSubmit}></button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddTodo
