import React from 'react'
import { Link } from 'react-router-dom'

export default function Personal(props) {
  return (
    <div>
      <div className="personalpage" >
        <div className="personalpage__title" >
          <h1>Personal info</h1>
        </div>
        <div className="personalpage__left">
          {props.menuItems.map(item => {
            if (item.active) {
              return <div className="personalpage__left__active">
                <div className="personalpage__left__active__header" > 
                  <h2>{item.name}</h2>
                </div>
                <div className="personalpage__left__active__content">
                  <div><p>{item.content}</p></div>
                  <div><p>{item.content}</p></div>
                  <div><p>{item.content}</p></div>
                </div>
              </div>
            } else {
              return
            }
          })}
          
        </div>
        <div className="personalpage__right">
          <div className="personalpage__right__header">
            <h3>Menu</h3>
          </div>
          <div className="personalpage__right__menu">
          <div>{props.menuItems.map(item => {
              if (!item.active) {
                return <div className="personalpage__right__menu__item" onClick={props.navigateMenu}>
                  <h3 className={item.name}>{item.name}</h3>
                </div>
              } else {
                return <div className="personalpage__right__menu__item__active">
                  <h3>{item.name}</h3>
                </div>
              }
              
            })}</div>
          </div>
        </div>
        <div className="personalpage__span" >
          
        </div>
      </div>
    </div>
  )
}
