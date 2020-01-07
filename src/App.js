import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'
import HeaderContainer from './components/Header/HeaderContainer'
import HomePageContainer from './components/HomePage/HomePageContainer'
import CalendarContainer from './components/Calendar/CalendarContainer'
import GameRoomContainer from './components/GameRoom/GameRoomContainer'
import DragAndDropContainer from './components/DragAndDrop/DragAndDropContainer'
import DrawingContainer from './components/Drawing/DrawingContainer'
import PhotoGalleryContainer from './components/PhotoGallery/PhotoGalleryContainer'
import ProfileContainer from './components/Profile/ProfileContainer'


class App extends Component {
  render() {
    return (
      <div className="App" >
        <HeaderContainer />
        <Route exact path="/" component={HomePageContainer} />
        <Route path="/calendar" component={CalendarContainer} />
        <Route path="/games" component={GameRoomContainer} />
        <Route path="/picking-apples/" component={DragAndDropContainer} />
        <Route path="/drawing/" component={DrawingContainer} />
        <Route path="/photo-search" component={PhotoGalleryContainer} />
        <Route path="/profile" component={ProfileContainer} />
      </div>
    );
  }
}

export default App
