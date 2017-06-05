import React from 'react';

const Todo = React.createClass({
  getInitialState() {
    return ({todos: []})
  },
  newTodo(e) {
    let today = new Date();
    if (e.key === 'Enter') {
      console.log(this.state.todos)
      this.setState({
        todos: this.state.todos.concat({title: e.target.value, date: today})
      })
      e.target.value = ''
    }
  },
  delTodo(e) {
    console.log(e.target.attributes.getNamedItem('data-index').value)
    this.setState({
      todos: this.state.todos.splice(1, e.target.attributes.getNamedItem('data-index').value)
    })
  },
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Todo List Creator</div>
        <div className="panel-body">
          <input type="text" placeholder="enter todo name" className="form-control" onKeyPress={this.newTodo}/>
        </div>
        <ul className="list-group">
          {this.state.todos.map((td, index) => (
                <li key={index} className="list-group-item">
                <span className="badge danger" data-index={index} onClick={this.delTodo}>x</span>
                <strong>{td.title}</strong>
                <br/>
                {td.date.toDateString()}</li>
          ))
        }
        </ul>
      </div>
    );
  }
});

export default Todo;
