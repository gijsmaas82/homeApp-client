import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage(props) {

  return (
    <div>
      <div className="homepage" >
        <div className="homepage__title" >
          <h1>Portfolio Gijs Maas</h1>
        </div>
        <div className="homepage__left" onMouseEnter={props.openLeft} onMouseLeave={props.closeLeft}>
          <div className="homepage__left__header">
            <h2>Personal info</h2>
          </div>
          <div className="homepage__left__image">
            <img src="https://i.ibb.co/4YDTRx6/DSC03981.jpg" ></img>
          </div>
          {props.leftVisible && <div className="homepage__left__btn" >
          <Link to="/personal-info">Click</Link>
          </div>}
        </div>
        <div className="homepage__right" onMouseEnter={props.openRight} onMouseLeave={props.closeRight}>
        <div className="homepage__right__header">
            <h2>Projects</h2>
          </div>
          <div className="homepage__right__image">
            <img src="https://i.ibb.co/j3WhdQy/baby-avatar.png" ></img>
          </div>
          {props.rightVisible && <div className="homepage__right__btn" >
            <Link to="/projects">Click</Link>
          </div>}
        </div>
        <div className="homepage__span" >
          
        </div>
      </div>
    </div>
  )
}