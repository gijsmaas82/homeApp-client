import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getFavoritePhotos, getUserDrawings } from '../../actions'
import SignUpAndLogIn from '../SignUpAndLogIn/SignUpAndLogIn'


class ProfileContainer extends Component {
  state = {
    menuItems: [
      {className:'menu__item__calendar', name: 'Calendar', link:'/calendar', icon:'fas fa-calendar'},
      {className:'menu__item__games', name: 'Games', link: '/games', icon:'fas fa-gamepad'}, 
      {className:'menu__item__photos', name: 'Photos', link: '/photo-search', icon:'fas fa-camera'},  
       ],
    showFavoritePhotos: false,
    showUserDrawings: false,
    showProfile: true
  }

  getFavoritePhotos = () => {
    this.props.getFavoritePhotos(this.props.user.jwt)
    this.setState({ showProfile: false, showFavoritePhotos: true, showUserDrawings: false })
  }

  getUserDrawings = () => {
    this.props.getUserDrawings(this.props.user.jwt)
    this.setState({ showProfile: false, showFavoritePhotos: false, showUserDrawings: true })
  }
  render() {
    return (
      <div>
        {!this.props.user ?
        <SignUpAndLogIn /> 
        :
        <Profile
          user={this.props.user}
          menuItems={this.state.menuItems}
          showFavoritePhotos={this.state.showFavoritePhotos}
          showUserDrawings={this.state.showUserDrawings}
          getFavoritePhotos={this.getFavoritePhotos}
          getUserDrawings={this.getUserDrawings}
          favoritePhotos={this.props.favoritePhotos}
          userDrawings={this.props.userDrawings}
        />}
      </div>
    )
  }
}

function mapStateToProps  (state) {
  return {
    user: state.login,
    favoritePhotos: state.favoritePhotos,
    userDrawings: state.userDrawings
  }
}

const mapDispatchToProps = {
  getFavoritePhotos,
  getUserDrawings
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)