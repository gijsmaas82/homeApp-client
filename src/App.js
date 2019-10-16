import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import HomePageContainer from './components/HomePage/HomePageContainer'
import ToDoListContainer from './components/ToDoList/ToDoListContainer'
import SignUpContainer from './components/SignUp/SignUpContainer'
import LogInContainer from './components/LogIn/LogInContainer';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <HeaderContainer />
        <Route exact path="/" component={HomePageContainer} />
        <Route path="/signup/" component={SignUpContainer} />
        <Route path="/login/" component={LogInContainer} />
        <Route path="/todolist/" component={ToDoListContainer} />
      </div>
    );
  }
}

export default App
