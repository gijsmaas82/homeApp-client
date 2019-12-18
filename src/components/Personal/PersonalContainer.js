import React, { Component } from 'react'
import Personal from './Personal'
import FooterContainer from '../Footer/FooterContainer'

export default class PersonalContainer extends Component {
  state = {
    menuItems: [
      {name: 'Personalia', active: true, content:'A 37-year old father who lives in Haarlem'},
      {name: 'Background', active: false, content: 'Used to be a teacher and now a full-stack developer'}, 
      {name: 'Interests', active: false, content: 'History, Politics, Computer Science, UX design'}, 
      {name: 'Hobbies', active: false, content: 'Reading, Volleybal, Games, Fitness, Coding'}, 
      {name: 'Contact', active: false, content: 'Check the out the buttons below'},  
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
        <Personal 
        navigateMenu={this.navigateMenu}
        menuItems={this.state.menuItems}
        />
      </div>
    )
  }
}
