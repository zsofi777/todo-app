import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
//import './App.css';

//root component container, store state, object with todos property, 2 items
class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'take doggie for a walk' },
      { id: 2, content: 'watch Netflix' }
    ]
  }
  //delete has to be here, mert interact with up state
    //id parameter will filter & look the item
    //with false => remove from array (ha arra katt, törölje)
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    //update
    this.setState({
      //2 array-t egyenlővé teszem (felső és a delete-es)
      //key & value also "todos"
      todos: todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    //beletesszük ebbe az új array-be a régit, és hozzáadjuk az új elemet
    let todos = [...this.state.todos, todo];
    //update
    this.setState({
      todos: todos
    });
  }
  //render mert render jsx template
  //nest Todos with props (todos) in {} mert dynamic, up array pass here in this component
  //=> we can access todos inside Todos.js component
  //call delete function as prop {this.deleteTodo} for call in todos component (pass down here), 
  //when click on a todo
  //pass in Todos.js
  render() {
    return (
      <div className="todo-app container z-depth-5">
        <h1 className="center red-text text-accent-4">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
export default App;