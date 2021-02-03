import React,{Component} from 'react';
import './App.css';

class App extends Component {
  state={
    todolist :[]
  }
  render(){
  return (
    <div>
    <div className="jumbotron jumbotron-fluid py-2">
  <div className="container">
    <h1 className="display-2">To-Do App</h1>
    
  </div>
</div>
<form className="mb-3" onSubmit={this.handlesubmit} >
  <div className="input-group">
  <input type="text" name="todotask" className="form-control" placeholder="Please enter your task" autocomplete="off"></input>
   <div className="input-group-append">
     <button type="submit" className="btn btn-outline-success">Add</button>
   </div>
   </div>
</form>
<ul className="list-group">
  {
    this.state.todolist.map(
      (item,index)=>{
        return<li className="list-group-item" key={index}>
          {item}
          <button className="btn btn-sm btn-outline-danger float-right" onClick={(event)=>{this.deletetodotask(event,index)}}>Delete</button>
          </li>
      }
    )
  }
  

</ul>

</div>
  );
}
handlesubmit=(event)=>{
  const taskdesc=event.target.elements.todotask.value;
  if(taskdesc.length>0){
this.setState(
  {todolist:[...this.state.todolist,taskdesc]}
)
event.target.reset();
  }
  event.preventDefault();
}
deletetodotask=(event,index)=>{
  var taskarray=[...this.state.todolist]
  taskarray.splice(index,1)
  this.setState({todolist:taskarray})
}


}

export default App;
