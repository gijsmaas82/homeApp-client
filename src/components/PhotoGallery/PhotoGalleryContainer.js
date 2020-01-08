import React, { Component } from 'react'
import { getPhotos, getPage, getSearchTag, getUserAlbums } from '../../actions'
import { connect } from 'react-redux'
import PhotoGallery from './PhotoGallery'
import request from 'superagent'
const { url } = require('../../constants')



class PhotoGalleryContainer extends Component {
  state = {
    tag: '',
    currentPage: 1,
    saving: false,
    url: null,
    randomPhoto: Math.floor(Math.random() * 10),
    uploadingPhoto: false,
    filename: '',
    name: '',
    album: null,
    albums: [],
    message: '',

  }

  onPageClick = (event) => {
    this.setState({ currentPage: Number(event.currentTarget.dataset.pagenumber) })
    this.props.getPage(event.currentTarget.dataset.pagenumber)
    window.scrollTo(0, 0)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFiles = files => {
    this.setState({
      url: files.base64,
      filename: files.fileList[0].name
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    request
      .post(`${url}/photo`)
      .set('Authorization', `Bearer ${this.props.user.jwt}`)
      .send({ picture: this.state.url, name: this.state.name, album: this.state.album })
      .then(response => {
        if (response.body) {
          this.setState({
            message: `${response.body.name} has been saved`
          })
        }
      })
      .catch(console.error)
  }

  onSubmitSearch = (event) => {
    event.preventDefault()
    this.props.getSearchTag(this.state.tag)
    this.props.getPhotos(this.state.tag)
    this.setState({ tag: '' })
  }

  promptSave = (e) => { 

    if (this.props.user) {
      this.setState({ 
        saving: !this.state.saving, 
        url: e.currentTarget.dataset.url,
        name: e.currentTarget.dataset.name,
        album: 'Favorites'
      })
    }
  }

  promptUpload = () => {
    if (this.props.user) {
      this.props.getUserAlbums(this.props.user.jwt)
      this.setState({ uploadingPhoto: true })
    }
  }

  cancelUpload = () => {
    this.setState({ 
      uploadingPhoto: false,
      url: null,
      filename: '',
      name: '',
      album: null,
      message: '', 
    })
  }

  cancelSave = () => { 
    this.setState({ 
      saving: !this.state.saving,
      url: null,
      name: '',
      album: null,
      message: '', 
    })
  }

  savePicture = () => {
    request
      .post(`${url}/photo`)
      .set('Authorization', `Bearer ${this.props.user.jwt}`)
      .send({ picture: this.state.url, name: this.state.name, album: this.state.album })
      .then(response => {
        if (response.body) {
          this.setState({
            message: `${response.body.name} has been saved`
          })
        }
      })
      .catch(console.error)
  }

  newRandomPhoto = () => {
    this.setState({ randomPhoto: Math.floor(Math.random() * 10) })
  }

  render() {

    return (
      <div>
        <PhotoGallery 
          photos={this.props.photos}
          values={this.state}
          searchTag={this.props.searchTag}
          onPageClick={this.onPageClick}
          currentPage={this.state.currentPage}
          pages={this.props.pages}
          tag={this.state.tag}
          onSubmit={this.onSubmit}
          onSubmitSearch={this.onSubmitSearch}
          onChange={this.onChange}
          saving={this.state.saving}
          uploading={this.state.uploading}
          url={this.state.url}
          promptSave={this.promptSave}
          cancelSave={this.cancelSave}
          promptUpload={this.promptUpload}
          cancelUpload={this.cancelUpload}
          savePicture={this.savePicture}
          randomPhoto={this.state.randomPhoto}
          newRandomPhoto={this.newRandomPhoto}
          user={this.props.user}
          handleFiles={this.handleFiles}
          userAlbums={this.props.userAlbums}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { 
    user: state.login,
    photos: state.photos,
    searchTag: state.searchTag,
    pages: state.pagination,
    userAlbums: state.userAlbums
   }
}

export default connect (mapStateToProps, { getPhotos, getPage, getSearchTag, getUserAlbums })(PhotoGalleryContainer)