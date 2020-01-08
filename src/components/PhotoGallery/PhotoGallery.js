import React, { Component } from 'react'
import { Spinner, Pagination, Form, FormControl, Col, Button } from 'react-bootstrap'
import ReactFileReader from 'react-file-reader'

export default class PhotoGallery extends Component {
  render() {
    return (
      <div>
        <div className="photoapp">
        {this.props.saving &&
        <div className="photoapp__save">
          {!this.props.values.message ?
            <div className="photoapp__save__prompt">
            <h2>Save this image?</h2>
            <img src={this.props.url} alt="savedImage" />
            <div className="photoapp__save__prompt__buttons">
              <div onClick={this.props.cancelSave} className="photoapp__save__prompt__buttons__button"><p>Cancel</p></div>
              <div onClick={this.props.savePicture} className="photoapp__save__prompt__buttons__button"><p>Save Photo</p></div>
            </div>
          </div>
          :
          <div className="photoapp__save__prompt">
            <h2>{this.props.values.message}</h2>
            <img src={this.props.url} alt="savedImage" />
            <div className="photoapp__save__prompt__buttons">
              <div onClick={this.props.cancelSave} className="photoapp__save__prompt__buttons__button"><p>Close</p></div>
            </div>
          </div>}
        </div>
        }
        {this.props.values.uploadingPhoto &&
        <div className="photoapp__save">
          {!this.props.values.message ?
          <div className="photoapp__save__prompt">
            <h2>Upload an image?</h2>
            <Form onSubmit={this.props.onSubmit} style={{ maxWidth: "70vw" }} >
              <Col>
                <Form.Group controlId="formBasicText">
                  <Form.Label><p>Name of photo</p></Form.Label>
                  <Form.Control type="text" placeholder="Name your file" value={this.props.name}
                    name='name' onChange={this.props.onChange} required/>
                    <Form.Label><p>Make an Album</p></Form.Label>
                    <Form.Control type="text" placeholder="optional" value={this.props.album}
                      name='album' onChange={this.props.onChange}/>
                    <Form.Label><p>Choose an album</p></Form.Label>
                    {!this.props.userAlbums ?
                      <p>You don't have any albums yet</p>
                      :
                      <div>
                      {this.props.userAlbums.map(album => {
                      return <Form.Check 
                        custom
                        key={album} 
                        value={album}
                        name="album"
                        onChange={this.props.onChange}
                        type="checkbox"
                        label={album}
                        style={{fontWeight: "700", fontFamily: "'PT Sans Caption', sans-serif"}} />
                      })}
                    </div>}
                </Form.Group>
              </Col>
              <Col>
                <ReactFileReader handleFiles={this.props.handleFiles} base64={true}>
                  <div className='calendarpage__right__addButton'><p>Upload picture</p></div>
                </ReactFileReader>
                {!this.props.values.filename ? '' : <div><p>{this.props.values.filename}</p></div>}
              </Col>
              <Col>
                  <Button type="submit" className='calendarpage__right__addButton'><p>Upload to profile</p></Button>
              </Col>
            </Form>
            <div className="photoapp__save__prompt__buttons">
              <div onClick={this.props.cancelUpload} className="photoapp__save__prompt__buttons__button"><p>Cancel Upload</p></div>
            </div>
          </div>
          :
          <div className="photoapp__save__prompt">
            <h2>{this.props.values.message}</h2>
            <img src={this.props.url} alt="savedImage" />
            <div className="photoapp__save__prompt__buttons">
              <div onClick={this.props.cancelUpload} className="photoapp__save__prompt__buttons__button"><p>Close</p></div>
            </div>
          </div>
          }
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
              <Form inline onSubmit={this.props.onSubmitSearch} >
                <FormControl type="text" placeholder="Search" className="mr-sm-2" 
                  value={this.props.tag} name='tag' onChange={this.props.onChange}/>
                <div><div className="photoapp__search__input__button" onClick={this.props.onSubmitSearch}><p>Search</p></div>
                {this.props.user && <div className="photoapp__search__input__button" onClick={this.props.promptUpload}><p>Or upload your own photo.</p></div>}</div>
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
                return <div key={photo.title} className="photoapp__gallery__body__photos__photo">
                  
                  <img onClick={this.props.promptSave}
                  data-name={photo.title}
                  data-url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
                  src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="pic" />
                  
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
          <div className="homepage__span" >
          <div className="homepage__span__info">
            <p>Gijs Maas</p>
            <p>Haarlem</p>
            <p>drs.g.maas@gmail.com</p>
          </div>
          <div className="homepage__span__links">
            <a href="https://github.com/gijsmaas82"><i className="fab fa-github" /></a>
            <a href="https://www.linkedin.com/in/drs-gijs-maas/"><i className="fab fa-linkedin" /></a>
          </div>
        </div>  
        </div> 
      </div>
    )
  }
}