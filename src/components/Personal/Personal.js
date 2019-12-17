import React from 'react'
import { Link } from 'react-router-dom'

export default function Personal(props) {
  return (
    <div>
      <div className="personalpage" >
        <div className="personalpage__title" >
          <h1>Personal info</h1>
        </div>
        <div className="personalpage__left" onMouseEnter={props.openLeft} onMouseLeave={props.closeLeft}>
          <div className="personalpage__left__header">
            <h2>Personal info</h2>
          </div>
          <div className="personalpage__left__image">
            <img src="https://i.ibb.co/4YDTRx6/DSC03981.jpg" ></img>
          </div>
          {props.leftVisible && <div className="personalpage__left__btn" >
          <Link to="/personal-info">Click</Link>
          </div>}
        </div>
        <div className="personalpage__right" onMouseEnter={props.openRight} onMouseLeave={props.closeRight}>
        <div className="personalpage__right__header">
            <h2>Projects</h2>
          </div>
          <div className="personalpage__right__image">
            <img src="https://i.ibb.co/j3WhdQy/baby-avatar.png" ></img>
          </div>
          {props.rightVisible && <div className="personalpage__right__btn" >
            <Link to="/projects">Click</Link>
          </div>}
        </div>
        <div className="personalpage__span" >
          
        </div>
      </div>
    </div>
  )
}
