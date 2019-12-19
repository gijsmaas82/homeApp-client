import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects(props) {
  return (
    <div>
      <div className="projectspage" >
        <div className="projectspage__title" >
          <h1>Projects</h1>
        </div>
        
        <div className="projectspage__left">
          <div className="projectspage__left__header">
            <Link to="/">
                <i className="fas fa-backward" style={{fontSize: "5rem", color: "rgb(83, 11, 11)"}}/>
            </Link>
            <h3>Menu</h3>
          </div>
          <div className="projectspage__left__menu">
          <div></div>{props.menuItems.map(item => {
              if (!item.active) {
                return <div className="projectspage__left__menu__item" onClick={props.navigateMenu}>
                  <h3 className={item.name}>{item.name}</h3>
                </div>
              } else {
                return <div className="projectspage__left__menu__item__active">
                  <h3>{item.name}</h3>
                </div>
              }
              
            })}</div>
          </div>
        
        <div className="projectspage__right">
          {props.menuItems.map(item => {
            if (item.active) {
              return <div className="projectspage__right__active">
                <div className="projectspage__right__active__header" > 
                  <h2>{item.name}</h2>
                </div>
                <div className="projectspage__right__active__content">
                  <div className="projectspage__right__active__content__left">
                    <h3>{item.contentItems[0].header}</h3>
                    <p>{item.contentItems[0].body}</p>
                    <ul>
                      {item.contentItems[0].list.map(item => {
                        return <li>{item}</li>
                      })}
                    </ul>
                  </div>
                  <div className="projectspage__right__active__content__middle">
                    <h3>{item.contentItems[1].header}</h3>
                    <p>{item.contentItems[1].body}</p>
                    <ul>
                      {item.contentItems[1].list.map(item => {
                        return <li>{item}</li>
                      })}
                    </ul>
                  </div>
                  <div className="projectspage__right__active__content__right">
                    <h3>{item.contentItems[2].header}</h3>
                    <p>{item.contentItems[2].body}</p>
                    <ul>
                      {item.contentItems[2].list.map(item => {
                        return <li>{item}</li>
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            } else {
              return
            }
          })}
          
        </div>
        <div className="projectspage__span" >
          
        </div>
      </div>
    </div>
    
  )
}
