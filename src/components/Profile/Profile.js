import React from 'react'
import { Link } from 'react-router-dom'

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
        </div>
        <div className="profilepage__middle">
          {props.showFavoritePhotos && 
            <div className="photoapp__gallery__body__photos">{props.favoritePhotos.map(photo => {
              return <div className="photoapp__gallery__body__photos__photo">
                <img 
                src={photo.picture} alt="pic" />
              </div>
            })}</div>
          }
          {props.showUserDrawings && 
            <div className="photoapp__gallery__body__photos">{props.userDrawings.map(drawing => {
              return <div className="photoapp__gallery__body__photos__photo">
                <img 
                src={drawing.URL} alt="pic" />
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
