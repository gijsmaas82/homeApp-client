import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import HomePageContainer from './components/HomePage/HomePageContainer'
import ToDoListContainer from './components/ToDoList/ToDoListContainer';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Route exact path="/" component={HomePageContainer} />
        <Route path="/todolist/" component={ToDoListContainer} />
      </div>
    );
  }
}

export default App
