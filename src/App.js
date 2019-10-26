import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import HomePageContainer from './components/HomePage/HomePageContainer'
import ToDoListContainer from './components/ToDoList/ToDoListContainer'
import SignUpContainer from './components/SignUp/SignUpContainer'
import LogInContainer from './components/LogIn/LogInContainer';
import CalendarContainer from './components/Calendar/CalendarContainer'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <HeaderContainer />
        <Route exact path="/" component={HomePageContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/login" component={LogInContainer} />
        <Route path="/todolist" component={ToDoListContainer} />
        <Route path="/calendar" component={CalendarContainer} />
      </div>
    );
  }
}

export default App
