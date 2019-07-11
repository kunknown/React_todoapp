import React, {Component} from 'react';
import Todos from './Todos'
import AddItem from './AddItem'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'play games'},
      {id: 2, content: 'buy groceries'}
    ]
  }
  deleteTodoItem = (id) => {
    // console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }
  AddItem = (item) => {
    item.id = Math.random();
    let todos = [...this.state.todos, item]
    this.setState({
      todos: todos
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodoItem={this.deleteTodoItem}/>
        <AddItem addItem={this.AddItem}/>
      </div>
    )
  }
}

export default App;
