import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'
import HeaderContainer from './components/Header/HeaderContainer'
import HomePageContainer from './components/HomePage/HomePageContainer'
import ToDoListContainer from './components/ToDoList/ToDoListContainer'
import SignUpContainer from './components/SignUp/SignUpContainer'
import LogInContainer from './components/LogIn/LogInContainer';
import CalendarContainer from './components/Calendar/CalendarContainer'
import GameRoomContainer from './components/GameRoom/GameRoomContainer'
import DragAndDropContainer from './components/DragAndDrop/DragAndDropContainer'
import DrawingContainer from './components/Drawing/DrawingContainer'
import PersonalContainer from './components/Personal/PersonalContainer'
import ProjectsContainer from './components/Projects/ProjectsContainer'
// import FooterContainer from './components/Footer/FooterContainer'

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
        <Route path="/games" component={GameRoomContainer} />
        <Route path="/picking-apples/" component={DragAndDropContainer} />
        <Route path="/drawing/" component={DrawingContainer} />
        <Route path="/personal-info" component={PersonalContainer} />
        <Route path="/projects" component={ProjectsContainer} />
        {/* <FooterContainer /> */}
      </div>
    );
  }
}

export default App
