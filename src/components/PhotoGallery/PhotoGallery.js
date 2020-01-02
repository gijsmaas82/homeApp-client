import React, { Component } from 'react'
import { Spinner, Pagination, Tooltip, OverlayTrigger, Form, FormControl } from 'react-bootstrap'

export default class PhotoGallery extends Component {
  render() {
    return (
      <div>
        <div className="photoapp">
        {this.props.saving &&
        <div className="photoapp__save">
          <div className="photoapp__save__prompt">
            <h3>Save this image?</h3>
            <img src={this.props.url} alt="savedImage" />
            <div className="photoapp__save__prompt__buttons">
              <div onClick={this.props.cancelSave} className="photoapp__save__prompt__buttons__button"><p>Cancel</p></div>
              <div onClick={this.props.savePicture} className="photoapp__save__prompt__buttons__button"><p>Save Photo</p></div>
            </div>
          </div>
        </div>
        }
          <div className="photoapp__title">
            <h2>Photo Search</h2>
          </div>
          <div className="photoapp__search">
            <div className="photoapp__search__info">
              <h3>Welcome to this Photo Search App</h3>
              <p>Please type something that you are interested in and start searching for cool images!</p>
            </div>
            <div className="photoapp__search__input">
              <Form inline onSubmit={this.props.onSubmit} >
                <FormControl type="text" placeholder="Search" className="mr-sm-2" 
                  value={this.props.tag} name='tag' onChange={this.props.onChange}/>
                <div className="photoapp__search__input__button" onClick={this.props.onSubmit}><p>Search</p></div>
              </Form>
            </div>
          </div>
          <div className="photoapp__gallery">
            <div>
              {!this.props.photos && this.props.searchTag &&
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              }
              {this.props.photos && 
                <div className="photoapp__gallery__body">
                <div className="photoapp__gallery__body__photos">{this.props.photos.map(photo => {
                return <div className="photoapp__gallery__body__photos__photo">
                  <OverlayTrigger
                    key="bottom"
                    placement="bottom"
                    overlay={
                      <Tooltip id="bottom">
                        <p>Title: {photo.title}</p>
                      </Tooltip>
                    }
                  >
                  <img onClick={this.props.promptSave}
                  data-url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
                  src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="pic" />
                  </OverlayTrigger>
                </div>
              })}</div>
              <div className="photoapp__gallery__body__pagination">
                {!this.props.pages ? '...loading' : 
                    <Pagination>
                    <Pagination.First onClick={this.props.onPageClick} data-pagenumber={this.props.currentPage - this.props.currentPage + 1}/>

                    {this.props.currentPage === 1 ? <Pagination.Prev disabled/> :
                    <Pagination.Prev onClick={this.props.onPageClick} data-pagenumber={this.props.currentPage - 1}/>}
                    <Pagination.Ellipsis />
                    <div className="photoapp__gallery__body__pagination__page">
                      <p>Page {this.props.currentPage} of {this.props.pages} </p>
                    </div>
                    <Pagination.Ellipsis />
                    {this.props.currentPage === this.props.pages ? <Pagination.Next disabled/> :
                    <Pagination.Next onClick={this.props.onPageClick} data-pagenumber={this.props.currentPage + 1}/>}
                    <Pagination.Last onClick={this.props.onPageClick} data-pagenumber={this.props.pages}/>
                </Pagination>}
              </div>
              </div>
            }
            </div>
          </div>
          <div className="photoapp__right">
            <div className="photoapp__right__header">
                {!this.props.photos ? 
                  <div><h3>Start searching!</h3></div>
                : <div><h3>Results for {this.props.searchTag}</h3>
                  <img onClick={this.props.newRandomPhoto}
                  src={`https://farm${this.props.photos[this.props.randomPhoto].farm}.staticflickr.com/${this.props.photos[this.props.randomPhoto].server}/${this.props.photos[this.props.randomPhoto].id}_${this.props.photos[this.props.randomPhoto].secret}.jpg`} alt="pic" />
                </div>}
            </div>
          </div>
          <div className="photoapp__span">
            <i className="fab fa-github" />
            <i className="fab fa-linkedin" />
          </div>
        </div> 
      </div>
    )
  }
}