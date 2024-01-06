import React,{Component} from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

export default class ToDoMain extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todos:[{id: 0, title:"First Todo",complete:false},
            {id: 1, title:"Second Todo",complete:false},
          {id: 2,title:"Third Todo",complete:false}]
    }
  }
  addTodo = (title) =>{
    console.log(title);
    fetch('url',{
      method:"POST",
      body: JSON.stringify({title}),
      headers:{
        'content-type' : "application/json"
      }
    })
    .then(res=>res.json())
    .then(response => {
      if(response.status){
        let todos=[...this.state.todos];
    let id=todos[todos.length-1]?todos[todos.length-1]['id']+1:0;
    let newTodo={
      id,
      title,
      complete:false,
    };
    todos.push(newTodo);
    this.setState({todos});


      }
    

  })
    let todos=[...this.state.todos];
    let id=todos[todos.length-1]?todos[todos.length-1]['id']+1:0;
    let newTodo={
      id,
      title,
      complete:false,
    };
    todos.push(newTodo);
    this.setState({todos});

  };
  completeTodo = (id)=> {
    fetch('url/'+id)
    .then(res=>res.json())
    .then(response=>{
      let todos = [...this.state.todos];
    todos.filter((todo) => {
      if (todo.id === id){
      todo.complete = true;
      }
    });
  
    this.setState({ todos });

    })
    let todos = [...this.state.todos];
    todos.filter((todo) => {
      if (todo.id === id){
      todo.complete = true;
      }
    });
  
    this.setState({ todos });
  };
  deleteTodo = (id)=> {
    fetch('url/'+id)
    .then(res=>res.json())
    .then(response =>{
      let todos = [...this.state.todos];
      todos.filter((todo,index)=>{
        if (todo.id === id) {
          todos.splice(index,1);
        }
  
      });
      this.setState({todos});

    })
    let todos = [...this.state.todos];
    todos.filter((todo,index)=>{
      if (todo.id === id) {
        todos.splice(index,1);
      }

    });
    this.setState({todos});
  }


  render() {
  return (
    <div>
    <div className = 'developer'>
    <span>Developer</span>
    <br />
    <b>Saddala Upendra</b>
    

    </div>
      <h1 className='heading'>To Do App</h1>
      <div className='todos'>
      {this.state.todos.map(todo=>(
        <Todo key={todo.id} todo={todo} completeTodo={(id)=>this.completeTodo(id)}
        deleteTodo={(id)=>this.deleteTodo(id)}/>
      ))}
      </div>
      <TodoForm addTodo={(todo)=> this.addTodo(todo)}/>
      
          
    </div>
  )
 }

} 





