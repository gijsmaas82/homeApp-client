import React, { Component } from 'react'
import Projects from './Projects'

export default class ProjectsContainer extends Component {
  state = {
    menuItems: [
      {name: 'Home App', active: true, content:'This app!'},
      {name: 'Videogames Room', active: false, content: 'A Game Room I built for my son'}, 
      {name: 'Photo Search App', active: false, content: 'A search engine for Flickr images.'}, 
      {name: 'Path To War', active: false, content: 'Online multiplayer game about the First World War'}, 
      {name: 'Calendar App', active: false, content: 'Team-project'},  
      ]
  }

  navigateMenu = (e) => {
    const updatedMenu = this.state.menuItems.map(item => {
      if (e.target.classList.value === item.name) {
        item.active = true
        return item
      } else {
        item.active = false
        return item
      }
    })
    this.setState({ menuItems: updatedMenu })
  }
  render() {
    return (
      <div>
        <Projects 
        navigateMenu={this.navigateMenu}
        menuItems={this.state.menuItems}
        />
      </div>
    )
  }
}
