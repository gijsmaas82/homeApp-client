import React, { Component } from 'react'
import Projects from './Projects'

export default class ProjectsContainer extends Component {
  state = {
    menuItems: [
      {name: 'Home App', active: true, 
        contentItems: [
          {header: 'This app!', body:'Wow!', list: ['Amazings', 'Awesome', 'Cool']},
          {header: 'Nice', body:'bar', list: ['foo', 'bar', 'Col']},
          {header: 'Boa', body:'lee', list: ['karma', 'lope', 'Classy']}
        ]
      },
      {name: 'Videogames Room', active: false,
        contentItems: [
          {header: 'This app!', body:'Wow!', list: ['Amazings', 'Awesome', 'Cool']},
          {header: 'Nice', body:'bar', list: ['foo', 'bar', 'Col']},
          {header: 'Boa', body:'lee', list: ['karma', 'lope', 'Classy']}
        ]
      }, 
      {name: 'Photo Search App', active: false,
        contentItems: [
          {header: 'This app!', body:'Wow!', list: ['Amazings', 'Awesome', 'Cool']},
          {header: 'Nice', body:'bar', list: ['foo', 'bar', 'Col']},
          {header: 'Boa', body:'lee', list: ['karma', 'lope', 'Classy']}
        ]
      }, 
      {name: 'Path To War', active: false, 
        contentItems: [
          {header: 'This app!', body:'Wow!', list: ['Amazings', 'Awesome', 'Cool']},
          {header: 'Nice', body:'bar', list: ['foo', 'bar', 'Col']},
          {header: 'Boa', body:'lee', list: ['karma', 'lope', 'Classy']}
        ]
      }, 
      {name: 'Calendar App', active: false, 
        contentItems: [
          {header: 'This app!', body:'Wow!', list: ['Amazings', 'Awesome', 'Cool']},
          {header: 'Nice', body:'bar', list: ['foo', 'bar', 'Col']},
          {header: 'Boa', body:'lee', list: ['karma', 'lope', 'Classy']}
        ]
      },  
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
