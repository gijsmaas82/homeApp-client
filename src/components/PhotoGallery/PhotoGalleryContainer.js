import React, { Component } from 'react'
import { getPhotos, getPage, getSearchTag } from '../../actions'
import { connect } from 'react-redux'
import PhotoGallery from './PhotoGallery'



class PhotoGalleryContainer extends Component {
  state = {
    tag: '',
    currentPage: 1
  }

  onPageClick = (event) => {
    this.setState({ currentPage: Number(event.currentTarget.dataset.pagenumber) })
    console.log('value', event.currentTarget.dataset.pagenumber, 'page', this.props.pages)
    this.props.getPage(event.currentTarget.dataset.pagenumber)
    window.scrollTo(0, 0)
  }

  onChange = (event) => {
    this.setState({
      tag: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.getSearchTag(this.state.tag)
    this.props.getPhotos(this.state.tag)
    this.setState({ tag: '' })
  }

  render() {

    return (
      <div>
        <PhotoGallery 
          photos={this.props.photos}
          searchTag={this.props.searchTag}
          onPageClick={this.onPageClick}
          currentPage={this.state.currentPage}
          pages={this.props.pages}
          tag={this.state.tag}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { 
    photos: state.photos,
    searchTag: state.searchTag,
    pages: state.pagination
   }
}

export default connect (mapStateToProps, { getPhotos, getPage, getSearchTag })(PhotoGalleryContainer)