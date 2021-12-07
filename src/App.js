import React, { Component } from 'react';
import './App.css';
import imgTodo from'./checklist_117966.png';
import Form from './components/FormTodo/form';
import ListItems from './components/ListItems/LisItems';
class App extends Component {
  constructor()
  {
    super();
    this.state = 
    {
      newtext:'',
      Todo:
      [
        {text:'learn course A' , completed:false , editing:false },
      ]
    }
    this.inputRef=React.createRef();
  }
  componentDidMount(){
    this.inputRef.current.focus();
  }

  // form in form.js
  handleSubmit = (e) =>
  {
    e.preventDefault();
    this.setState({
      newtext:''
    })
  }

  // input in form.js
  inputItem =(e) =>
  {
    this.setState({
      newtext:e.target.value
    })
  }

  // Add in form.js
  addItem =() =>
  {
    const todos = [...this.state.Todo];
    todos.push({
      // updated value
      text:this.state.newtext,
      completed:false , 
      editing:false 
    });

    // updated to apear in page
    this.setState({
      Todo : todos,
      newtext:'',
    })
  }

  // edit in ListItems.js
  Edit =(index) =>
  {
    const Todos =[...this.state.Todo];
    // change editing
    Todos[index].editing = true
    // filter by editing
    this.setState({
      newtext:Todos[index].text,
      Todo : Todos.filter(todo => {return(todo.editing!==true)})
    })
  }

  // Delete in ListItems.js
  Delete =(index) =>
  {
    const Todos =[...this.state.Todo];
    // Delete item
    Todos.splice(index , 1)
    this.setState
    ({
      Todo: Todos
    })
  }

  // Completed in ListItems.js
  CompletedItem=(index) =>
  {
    const Todos =[...this.state.Todo];
    //change completed 
    Todos[index].completed = !Todos[index].completed
    this.setState
    ({
      Todo: Todos
    })
  }


  render()
  {
    return (

      <div className="App">
        <div className="App-wrapper">
          <div className="header-app-Top">
            <img src={imgTodo} alt="" width="50px" height="50px"/>
            <header className="App-header">
              ToDo-S
            </header>
          </div>

          <div className="body-App">
            <Form  
              onSubmit={this.handleSubmit} 
              onChange={this.inputItem}
              value={this.state.newtext} 
              onClick={this.addItem}
              inputRef={this.inputRef}
            />
          </div>
          
          <ul className="Parent-List-items"> 
            {this.state.Todo.map( (todo,index) => 
              {
                return(
                <ListItems 
                  todo={todo}
                  key={index}
                  Edit={() => this.Edit(index)}
                  Delete={() => this.Delete(index)}
                  CompletedItem={() => this.CompletedItem(index)}
                />
              )})
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
