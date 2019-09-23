import React from 'react';

//todos component, return template
//{todos} props object reference to use here
//& pass the delete
const Todos = ({ todos, deleteTodo }) => {
 //map through the list, on each item
 //if empty, not show
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        //output from App.js to here via props   
        //output todos "content" property
        //for map react need key   
        //click event fire the delete function
        //{todo.id} mert id is stored IN todo
        //todo.id is id of current todo passed to filter function from this.state.todos 
        //and id is parameter from arrow function deleteTodo
        <div className="collection-item" key={todo.id}>
          <span onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    //if empty:
      <p className="center">You have no todos left</p>
    );
  return (
    //call up todoList
    <div className="todos collection">
      {todoList}
    </div>
  )
}
export default Todos;