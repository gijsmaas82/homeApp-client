import React from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from 'react-bootstrap'

export default function Profile(props) {
  return (
    <div>
      {props.user &&
      <div className="profilepage">
        <div className="profilepage__header">
          <h1>Profile of {props.user.userName}</h1>
        </div>
        <div className="profilepage__left">
          <div className="profilepage__left__avatar" >
            <img src={props.user.avatar} alt="avatar"/>
          </div>
          <div>
            <p>{props.user.description}</p>
          </div>
          <div 
            className="calendarpage__right__addButton"
            onClick={props.getFavoritePhotos}
            ><p>Your Photos</p></div>
          <div 
            className="calendarpage__right__addButton"
            onClick={props.getUserDrawings}
            ><p>Your Drawings</p></div>
          <div 
            className="calendarpage__right__addButton"
            onClick={props.getUserAlbums}
            ><p>Your Albums</p></div>
        </div>
        <div className="profilepage__middle">
          {props.showFavoritePhotos && 
            <div className="photoapp__gallery__body__photos">{props.favoritePhotos.map(photo => {
              return <div className="photoapp__gallery__body__photos__photo">
                <img 
                src={photo.picture} alt="pic" />
              </div>
            })}
            <div className="calendarpage__right__addButton">
              <Pagination>
                <Pagination.First onClick={props.onPageClick} data-pagenumber={props.currentPage - props.currentPage + 1}/>
                {props.currentPage === 1 ? <Pagination.Prev disabled/> :
                <Pagination.Prev onClick={props.onPageClick} data-pagenumber={props.currentPage - 1}/>}
                <div className="photoapp__gallery__body__pagination__page">
                  <p>Page {props.currentPage} of {Math.ceil(props.pagination/10)}</p>
                </div>
                {props.currentPage === Math.ceil(props.pagination/10) ? <Pagination.Next disabled /> :
                <Pagination.Next onClick={props.onPageClick} data-pagenumber={props.currentPage + 1}/>}
                <Pagination.Last onClick={props.onPageClick} data-pagenumber={Math.ceil(props.pagination/10)} />
              </Pagination>
            </div>
          </div>
          }
          {props.showUserDrawings && 
            <div className="photoapp__gallery__body__photos">{props.userDrawings.map(drawing => {
              return <div className="photoapp__gallery__body__photos__photo">
                <img 
                src={drawing.URL} alt="pic" />
              </div>
            })}</div>
          }
          {props.showUserAlbums && 
            <div className="photoapp__gallery__body__photos">{props.userAlbums.map(album => {
              return <div data-album={album} className="calendarpage__right__addButton" onClick={props.getAlbumPhotos}>
                <h2>{album}</h2>
              </div>
            })}</div>
          }
        </div>
        <div className="profilepage__right">
          <div className="profilepage__right__items">{props.menuItems.map(item => {
            return <div key={item.name} className="profilepage__right__items__item">
              <Link to={item.link}>
                <p>{item.name}</p>
                <div className={item.className}><i className={item.icon}></i></div>
              </Link>
            </div>})}
          </div>
        </div>
        <div className="profilepage__bottom">

        </div>
      </div>
      }
    </div>
  )
}
