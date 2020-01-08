import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getFavoritePhotos, getUserDrawings, getUserAlbums, getAlbumPhotos } from '../../actions'
import SignUpAndLogIn from '../SignUpAndLogIn/SignUpAndLogIn'
import request from 'superagent'
import { url } from '../../constants'


class ProfileContainer extends Component {
  state = {
    menuItems: [
      {className:'menu__item__calendar', name: 'Calendar', link:'/calendar', icon:'fas fa-calendar'},
      {className:'menu__item__games', name: 'Games', link: '/games', icon:'fas fa-gamepad'}, 
      {className:'menu__item__photos', name: 'Photos', link: '/photo-search', icon:'fas fa-camera'},  
       ],
    showFavoritePhotos: false,
    showUserDrawings: false,
    showProfile: true,
    showUserAlbums: false,
    currentPage: 1,
    activeAlbum: null,
    showPhoto: false,
    message: null,
    photo: null,
    photoId: null
  }

  getFavoritePhotos = () => {
    this.props.getFavoritePhotos(this.props.user.jwt, this.state.currentPage)
    this.setState({ showProfile: false, 
      showFavoritePhotos: true, 
      showUserDrawings: false,
      showUserAlbums: false,
      showAlbumPhotos: false,
      activeAlbum: null })
    window.scrollTo(0, 0)
  }

  onPageClick = (event) => {
    if (!this.state.activeAlbum) {
      this.setState({ currentPage: Number(event.currentTarget.dataset.pagenumber) })
      this.props.getFavoritePhotos(this.props.user.jwt, event.currentTarget.dataset.pagenumber)
      window.scrollTo(0, 0)
    } else {
      this.setState({ currentPage: Number(event.currentTarget.dataset.pagenumber) })
      this.props.getAlbumPhotos(this.props.user.jwt, this.state.activeAlbum, event.currentTarget.dataset.pagenumber)
      window.scrollTo(0, 0)
    }
    window.scrollTo(0, 0)
  }

  getUserDrawings = () => {
    this.props.getUserDrawings(this.props.user.jwt)
    this.setState({ showProfile: false, 
      showFavoritePhotos: false, 
      showUserDrawings: true,
      showUserAlbums: false,
      activeAlbum: null })
    window.scrollTo(0, 0)
  }

  getUserAlbums = () => {
    this.props.getUserAlbums(this.props.user.jwt)
    this.setState({ showProfile: false, 
      showFavoritePhotos: false, 
      showUserDrawings: false,
      showUserAlbums: true,
      activeAlbum: null })
    window.scrollTo(0, 0)
  }

  getAlbumPhotos = (e) => {
    this.props.getAlbumPhotos(this.props.user.jwt, e.currentTarget.dataset.album, this.state.currentPage)
    this.setState({ showProfile: false, 
      showFavoritePhotos: true, 
      showUserDrawings: false,
      showUserAlbums: false,
      activeAlbum: e.currentTarget.dataset.album
     })
    window.scrollTo(0, 0)
  }

  promptPhoto = (e) => {
    this.setState({ 
      showPhoto: true, 
      photo: e.currentTarget.dataset.photo,
      photoId: e.currentTarget.dataset.id
    })
  }

  cancelDelete = () => {
    this.setState({
      showPhoto: false, 
      photo: null,
      photoId: null,
      message: ''
    })
  }

  deletePhoto = () => {
    request.delete(`${url}/photo/${this.state.photoId}`)
      .set('Authorization', `Bearer ${this.props.user.jwt}`)
      .then(response => {
        if (response.statusCode === 204) {
          this.setState({ message: 'Photo is deleted'})
        }
      })
      .catch(console.error)
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
          showUserAlbums={this.state.showUserAlbums}
          getFavoritePhotos={this.getFavoritePhotos}
          getUserDrawings={this.getUserDrawings}
          getUserAlbums={this.getUserAlbums}
          getAlbumPhotos={this.getAlbumPhotos}
          favoritePhotos={this.props.favoritePhotos}
          userDrawings={this.props.userDrawings}
          userAlbums={this.props.userAlbums}
          currentPage={this.state.currentPage}
          onPageClick={this.onPageClick}
          pagination={this.props.pagination}
          showPhoto={this.state.showPhoto}
          message={this.state.message}
          promptPhoto={this.promptPhoto}
          photo={this.state.photo}
          cancelDelete={this.cancelDelete}
          deletePhoto={this.deletePhoto}
        />}
      </div>
    )
  }
}

function mapStateToProps  (state) {
  return {
    user: state.login,
    favoritePhotos: state.favoritePhotos,
    userDrawings: state.userDrawings,
    userAlbums: state.userAlbums,
    pagination: state.pagination
  }
}

const mapDispatchToProps = {
  getFavoritePhotos,
  getUserDrawings,
  getUserAlbums,
  getAlbumPhotos
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)