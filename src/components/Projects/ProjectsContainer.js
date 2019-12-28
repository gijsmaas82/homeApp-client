import React, { Component } from 'react'
import Projects from './Projects'
import { url } from '../../constants'
import request from 'superagent'
import { connect } from 'react-redux'
import { getProjectInfo } from '../../actions'

class ProjectsContainer extends Component {
  state = {
    addProject: false,
    name: '',
    image: '',
    info: '',
    listItemOne: '',
    listItemTwo: '',
    listItemThree: '',
    activeItem: null,
    activeCV: true,
  }

  navigateMenu = (e) => {
    const clickedItem = this.props.projectInfo.find(item => {
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
  showProjectInput = (e) => {
    this.setState({ addProject: !this.state.addProject })
  }

  onChange = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  onSubmit =(e) => {
    e.preventDefault()
    request.post(`${url}/project`)
      .send(this.state)
      .then(response => {
        console.log(response.body)})
      .catch(console.error)
    this.setState({ 
      addProject: !this.state.addProject,
      name: '',
      image: '',
      info: '',
      listItemOne: '',
      listItemTwo: '',
      listItemThree: '' 
    })
  }
  componentDidMount() {
    this.props.getProjectInfo()
  }

  render() {
    return (
      <div>
        <Projects 
        navigateMenu={this.navigateMenu}
        menuItems={this.state.menuItems}
        addProject={this.state.addProject}
        showProjectInput={this.showProjectInput}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        state={this.state}
        projectInfo={this.props.projectInfo}
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
    projectInfo: state.projectInfo
  }
}

const mapDispatchToProps = {
  getProjectInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)