import React from 'react'
import { Link } from 'react-router-dom'
import { Stage, Layer, Circle } from 'react-konva';

export default function HomePage(props) {

  return (
    <div>
      <div className="homepage" >
        <div className="homepage__title" >
          <h1>Portfolio Gijs Maas</h1>
        </div>
        <div className="homepage__parallax__top">

        </div>
        <div className="homepage__left">
          <div className="homepage__left__header">
            <h2>Personal info</h2>
            <div className="homepage__left__header__btn">
              <Link to="/personal-info">
                <i className="fas fa-backward" />
              </Link>
            </div>
          </div>
        </div>
        <div className="homepage__middle" >
          <img src="https://i.ibb.co/4YDTRx6/DSC03981.jpg" />
          <h2>Programmer</h2>
          <h2>Teacher</h2>
          <h2>Historian</h2>
          <h2> Father</h2>
        </div>
        <div className="homepage__right">
          <div className="homepage__right__header">
            <h2>Projects</h2>
            <div className="homepage__right__header__btn">
              <Link to="/projects">
                <i className="fas fa-forward" />
              </Link>
            </div>
          </div>
        </div>
        <div className="homepage__parallax__bottom">

        </div>
        <div className="homepage__span" >
          <i className="fab fa-github" />
          <i className="fab fa-linkedin" />
        </div>
      </div>
    </div>
  )
}