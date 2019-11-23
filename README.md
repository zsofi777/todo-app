# A simple [React](https://reactjs.org) - [Materialize](https://materializecss.com/) Todo App :ballot_box_with_check:

This is a simple implementation of a To Do list to show ReactJS's basic features: components, props and state.

As starting point, use create-react-app, a node package developed by the creators of ReactJS that provides the basic scaffolding you need to create a ReactJS site. If you don't have it installed you can get instructions [here](https://github.com/facebook/create-react-app).

- App.js

  First, remove everything you don't need. 
  The App.js component will hold all the elements and components you need to render the web page of the application.
  The state of our application will reside in our main App.js component, and passed to the other components via props.
  You can find here the root component container, that stores state, and object with todos property, two items by deafult.
  - deleteTodo 
  
  Delete has to be here, because it interacts with the state above.
  The id parameter will filter and look for the item.
  If the value is false then it will remove the item from the array (delete after click on it).
  Then it updates the state and make the two arrays (the upper and the one with delete) equal.
  Here todos: todos mean that key and value also named "todos".
  - addTodo
  
  Put the old array into the new and add the new item, finally update the state.
  - render 
  
  Nest Todos with props (todos) in curly bracets because it is a dynamic action, then you pass the above array here in this component.
  Now you can access todos inside Todos.js component.
  Then you call the delete function as prop {this.deleteTodo} for call in todos component (pass down here), when click on a todo,
  and pass in Todos.js the new item.

Aside from App.js, you need two other components: AddTodo.js and Todos.js. 
- AddTodo.js

  Here you need a local state for what the user type in, and because it is a state, it have to be a class based component.
  With extend, it will inherit the react Component functionality.
  - handleChange
  
  If change happens it will update the content property, which will appear below in the <input>.
  - handleSubmit
  
  Here submit means output, it will display the new todo item.
  You call the function to add a todo, and get the props from App.js.
  For submit it will empty the state, and in the <input> below state will be equal with value.
  So it will be deleted, value={this.state.content}.
  - render 
  
  You can find the submit event in the form.
  Change event is when the user type in the input field (= when the text inside change).
- Todos.js

  Here you use the {todos} props object reference and pass the delete too in the todos component.
  - todoList 
  
    It maps through the list, on each item, and if it is empty, you don't want to show it.
      - return
      
      Output items from App.js via props, meaning the todos "content" property.
      For mapping React needs a key.   
      The click event will fire the delete function.
      Use {todo.id} because id is stored in todo. The todo.id is the id of the current todo passed to filter function from this.state.todos. 
      And id is a parameter from the arrow function deleteTodo.
  
  At last, you call the todoList from above.

To make the app look nicer, I have also added Materialize.

Bear in mind that this app is only the front end of a TODO list (there is no database) so your TODO list will disappear once you close your browser. For the purposes of this project, however, that is perfectly fine, since I only wanted to showcase a simple implementation of React components, props and state.
