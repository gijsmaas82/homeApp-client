import React, { Component } from 'react'
import Personal from './Personal'
import { url } from '../../constants'
import request from 'superagent'
import { connect } from 'react-redux'
import { getPersonalInfo } from '../../actions'
// import FooterContainer from '../Footer/FooterContainer'

class PersonalContainer extends Component {

  state = {
    addPersonal: false,
    name: '',
    imageUrl: 'https://i.ibb.co/qgDJsJ9/Apple.png',
    info: '',
    listItemOne: '',
    listItemTwo: '',
    listItemThree: '',
    menuItems: [
      {name: 'Personalia', active: true, 
        contentItems: [
          {header: 'This app!', body:'Wow!', list: ['Amazings', 'Awesome', 'Cool']},
          {header: 'Nice', body:'bar', list: ['foo', 'bar', 'Col']},
          {header: 'Boa', body:'lee', list: ['karma', 'lope', 'Classy']}
        ]
      },
      {name: 'Background', active: false,
        contentItems: [
          {header: 'This app!', body:'Wow!', list: ['Amazings', 'Awesome', 'Cool']},
          {header: 'Nice', body:'bar', list: ['foo', 'bar', 'Col']},
          {header: 'Boa', body:'lee', list: ['karma', 'lope', 'Classy']}
        ]
      }, 
      {name: 'Interests', active: false,
        contentItems: [
          {header: 'This app!', body:'Wow!', list: ['Amazings', 'Awesome', 'Cool']},
          {header: 'Nice', body:'bar', list: ['foo', 'bar', 'Col']},
          {header: 'Boa', body:'lee', list: ['karma', 'lope', 'Classy']}
        ]
      }, 
      {name: 'Hobbies', active: false, 
        contentItems: [
          {header: 'This app!', body:'Wow!', list: ['Amazings', 'Awesome', 'Cool']},
          {header: 'Nice', body:'bar', list: ['foo', 'bar', 'Col']},
          {header: 'Boa', body:'lee', list: ['karma', 'lope', 'Classy']}
        ]
      }, 
      {name: 'Contact', active: false, 
        contentItems: [
          {header: 'This app!', body:'Wow!', list: ['Amazings', 'Awesome', 'Cool']},
          {header: 'Nice', body:'bar', list: ['foo', 'bar', 'Col']},
          {header: 'Boa', body:'lee', list: ['karma', 'lope', 'Classy']}
        ]
      },  
      ],
    cards: {
      showLeftCard: false,
      showMiddleCard: false,
      showRightCard: false,
    }
  }
  
  showCard = (e) => {
    if (e.currentTarget.classList.value === "personalpage__left__active__content__left" ||
      e.currentTarget.classList.value === "personalpage__left__active__content__left open") {
      this.setState({cards: { showLeftCard: !this.state.cards.showLeftCard, 
        showMiddleCard: false, 
        showRightCard: false } 
      }) 
    } 
    if (e.currentTarget.classList.value === "personalpage__left__active__content__middle" ||
      e.currentTarget.classList.value === "personalpage__left__active__content__middle open") {
      this.setState({cards: { showLeftCard: false, 
        showMiddleCard: !this.state.cards.showMiddleCard, 
        showRightCard: false } 
      })
    } 
    if (e.currentTarget.classList.value === "personalpage__left__active__content__right" || 
    e.currentTarget.classList.value === "personalpage__left__active__content__right open") {
      this.setState({cards: { showLeftCard: false, 
        showMiddleCard: false, 
        showRightCard: !this.state.cards.showRightCard} 
      })
    }
    if (e.currentTarget.classList.value === "personalpage__left__active__content__left open" || 
        e.currentTarget.classList.value === "personalpage__left__active__content__middle open" ||
        e.currentTarget.classList.value === "personalpage__left__active__content__right open") {
      e.currentTarget.classList.remove('open')
    } else {
      e.currentTarget.classList.add('open')
    }  
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
  
  showPersonalInput = (e) => {
    this.setState({ addPersonal: !this.state.addPersonal })
  }

  onChange = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  onSubmit =(e) => {
    e.preventDefault()
    request.post(`${url}/personal`)
      .send(this.state)
      .then(response => {
        console.log(response.body)})
      .catch(console.error)
    this.setState({ 
      addPersonal: !this.state.addPersonal,
      name: '',
      imageUrl: 'https://i.ibb.co/qgDJsJ9/Apple.png',
      info: '',
      listItemOne: '',
      listItemTwo: '',
      listItemThree: '' 
    })
  }

  render() {
    return (
      <div>
        <Personal 
        navigateMenu={this.navigateMenu}
        menuItems={this.state.menuItems}
        showCard={this.showCard}
        cards={this.state.cards}
        addPersonal={this.state.addPersonal}
        showPersonalInput={this.showPersonalInput}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        state={this.state}
        />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    personalInfo: state.personalInfo
  }
}

const mapDispatchToProps = {
  getPersonalInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalContainer)