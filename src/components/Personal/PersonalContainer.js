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
    image: '',
    info: '',
    listItemOne: '',
    listItemTwo: '',
    listItemThree: '',
    activeItem: null,
    activeCV: false
  }

  navigateMenu = (e) => {
    const clickedItem = this.props.personalInfo.find(item => {
      if (e.target.classList.value === item.name) {
        item.active = true
        return item
      }
      return null
    })
    this.setState({ activeItem: clickedItem, activeCV: false })
  }

  showCV = () => {
    this.setState({ activeCV: true })
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
      image: '',
      info: '',
      listItemOne: '',
      listItemTwo: '',
      listItemThree: '' 
    })
  }
  componentDidMount() {
    this.props.getPersonalInfo()
  }

  render() {
    return (
      <div>
        <Personal 
        navigateMenu={this.navigateMenu}
        menuItems={this.state.menuItems}
        addPersonal={this.state.addPersonal}
        showPersonalInput={this.showPersonalInput}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        state={this.state}
        personalInfo={this.props.personalInfo}
        showCV={this.showCV}
        activeCV={this.state.activeCV}
        activeItem={this.state.activeItem}
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