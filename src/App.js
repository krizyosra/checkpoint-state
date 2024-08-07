import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Info from "./info";




class App extends Component {
  state = {
    Person: { fullName:"yosra", bio:"gérante", imgSrc:"", profession:"dev" },
    Boolean: false,
    count:0
  };

  componentDidMount(){
    setInterval(() => {
     this.setState({count:this.state.count+1})
    }, 1000);
  }
  render(){
    console.log(this.state.Boolean)
    return(
      <>
    
    {this.state.Boolean ? <Info  state={this.state}/> : null}

  
    
  <button onClick={()=>this.setState({Boolean:!this.state.Boolean})}>Show</button>
   
  <p>{this.state.count}</p>
    

</>
  )}}

export default App;


