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
        <div className="homepage__left" onMouseEnter={props.openLeft} onMouseLeave={props.closeLeft}>
          <div className="homepage__left__header">
            <h2>Personal info</h2>
            <div className="homepage__left__header__btn">
              <Link to="/personal-info">
                <i className="fas fa-backward" />
              </Link>
            </div>
          </div>
        </div>
        <div className="homepage__right" onMouseEnter={props.openRight} onMouseLeave={props.closeRight}>
          <div className="homepage__right__header">
            <h2>Projects</h2>
            <div className="homepage__right__header__btn">
              <Link to="/projects">
                <i className="fas fa-forward" />
              </Link>
            </div>
          </div>
        </div>
        <div className="homepage__span" >
          <div className="homepage__span__stage" >
            <Stage width={window.innerWidth} height={300}>
              <Layer>
                <Circle draggable x={200} y={100} radius={50} fill="rgb(83, 11, 11)" />
              </Layer>
            </Stage>
          </div>
        </div>
      </div>
    </div>
  )
}