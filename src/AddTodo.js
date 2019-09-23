import React, { Component } from 'react'

//need a local state for what user type in
//& mert state, it have to be class based component
//extend, mert örökölje a react Component functionality-t
class AddTodo extends Component {
  state = {
    content: ''
  }
  //(e)=event object
  //if change=> update the content property
  //<input>-hoz
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
    //ne frissítse az oldalt
    e.preventDefault();
    //submit=output, kiírja az új todo-t
    //call function to add a todo
    if (this._inputElement.value !== "") {
      //props: App.js-ből
    this.props.addTodo(this.state);
    //submit-ra űríti state-et, 
    //lent inputban =-vé teszi value-val, így kitörlődik, amit bevittem value={this.state.content} 
    this.setState({
      content: ''
    })
  }
}
  render() {
    return (
      //formban benne van a submit event
      //change event when user type in input field (=when text inside change)
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