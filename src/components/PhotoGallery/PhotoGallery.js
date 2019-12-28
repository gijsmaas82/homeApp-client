import React, { Component } from 'react'
import { Spinner, Jumbotron, Pagination, Figure, Tooltip, OverlayTrigger, Button, Form, FormControl } from 'react-bootstrap'

export default class PhotoGallery extends Component {
  render() {
    return (
      <div >
        <Jumbotron>
        <Form inline onSubmit={this.props.onSubmit} >
          <FormControl type="text" placeholder="Search" className="mr-sm-2" 
            value={this.props.tag} name='tag' onChange={this.props.onChange}/>
          <Button variant="outline-light" type="submit">Search</Button>
        </Form>
        </Jumbotron>
        {!this.props.photos && !this.props.searchTag && 
          <Jumbotron fluid style={{ display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h3>Welcome to this Photo Search App</h3>
            <p>Please type something that you are interested in and start searching for cool images!</p>

          </Jumbotron>
        }
        {!this.props.photos && this.props.searchTag &&
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        }
        {this.props.photos && 
            <div>
              <Jumbotron fluid style={{ display:"flex", justifyContent:"center"}}>
                <h3>Results for {this.props.searchTag}</h3>

              </Jumbotron>
            <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-evenly"}}>{this.props.photos.map(photo => {
            return <Figure>
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id="bottom">
                    <p>Title: {photo.title}</p>
                  </Tooltip>
                }
              >
              <Figure.Image rounded height={300}
              src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="pic" />
              </OverlayTrigger>
              {/* <div style={{ width:"500px" }}><p>Title: {photo.title}</p></div> */}
            </Figure>
          })}</div>
          <div style={{ display:"flex", justifyContent:"center"}}>
            {!this.props.pages ? '...loading' : <Pagination>
              <Pagination.First onClick={this.props.onPageClick} data-pagenumber={this.props.currentPage - this.props.currentPage + 1}/>
              
              {this.props.currentPage === 1 ? <Pagination.Prev disabled/> :
              <Pagination.Prev onClick={this.props.onPageClick} data-pagenumber={this.props.currentPage - 1}/>}
              <Pagination.Ellipsis />
              <Pagination.Item onClick={this.props.onPageClick} data-pagenumber={this.props.currentPage + 1}>{this.props.currentPage + 1}</Pagination.Item>
              <Pagination.Item onClick={this.props.onPageClick} data-pagenumber={this.props.currentPage + 2}>{this.props.currentPage + 2}</Pagination.Item>
              <Pagination.Item onClick={this.props.onPageClick} data-pagenumber={this.props.currentPage + 3}>{this.props.currentPage + 3}</Pagination.Item>
              <Pagination.Item onClick={this.props.onPageClick} data-pagenumber={this.props.currentPage + 4}>{this.props.currentPage + 4}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item onClick={this.props.onPageClick} data-pagenumber={this.props.pages} disabled>{this.props.pages}</Pagination.Item>
              {this.props.currentPage === this.props.pages ? <Pagination.Next disabled/> :
              <Pagination.Next onClick={this.props.onPageClick} data-pagenumber={this.props.currentPage + 1}/>}
              <Pagination.Last onClick={this.props.onPageClick} data-pagenumber={this.props.pages} disabled/>
            </Pagination>}</div>
          </div>
          
        }
        
      </div>
    )
  }
}