import React, { Component } from 'react';
import logo from './logo.svg';
import Projects from './Components/Projects';
import AddProjects from './Components/AddProjects';
import './App.css';

class App extends Component {
  constructor(){
    super(); //Contructors must have super()
    this.state={
      projects:[
      ]
    }
  }

componentWillMount(){
  this.setState({projects:[
    {
      title:'Business Website',
      category: 'Web Design'
    },
    {
      title:'Social Website',
      category: 'Mobile Development'
    },
    {
      title:'Ecommerce shopping cart',
      category: 'Web Design'
    }
  ]})
}

handleAddProject(project){
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects:projects});
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The 1UP Machine</h2>
        </div>
        <AddProjects addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
