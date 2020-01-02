import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomePage from './HomePage'
import { url } from '../../constants'
import request from 'superagent'
import { getPersonalInfo } from '../../actions'



class HomePageContainer extends Component {
  state = {
    addPersonal: false,
    name: '',
    image: '',
    info: '',
    listItemOne: '',
    listItemTwo: '',
    listItemThree: '',
    activeItem: null,
    activeCV: false,
    filename: '',
    intro: true,
  }

  navigateMenu = (e) => {
    const clickedItem = this.props.personalInfo.find(item => {
      if (e.target.classList.value === item.name) {
        item.active = true
        return item
      }
      return null
    })
    this.setState({ activeItem: clickedItem, activeCV: false, intro: false })
  }

  showCV = () => {
    this.setState({ intro: false, activeCV: true, activeItem: null })
  }
  
  showIntro = () => {
    this.setState({ intro: true, activeCV: false, activeItem: null })
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

  handleFiles = files => {
    this.setState({
      image: files.base64,
      filename: files.fileList[0].name
    })
  }

  componentDidMount() {
    this.props.getPersonalInfo()
  }

  render() {
    return (
      <div>
        <HomePage 
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
        handleFiles={this.handleFiles}
        filename={this.state.filename}
        intro={this.state.intro}
        showIntro={this.showIntro}
        /> 
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { 
    user: state.login,
    personalInfo: state.personalInfo 
  }
}


const mapDispatchToProps = {
  getPersonalInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
