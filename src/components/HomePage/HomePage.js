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
            <Link to="/personal-info">
                <i className="fas fa-backward" style={{fontSize: "10rem"}}/>
            </Link>
          </div>
          {props.leftVisible && 
            <div>
              <p style={{fontSize: "2rem", color:"rgb(233, 14, 14)" }}>Click to see my personal info</p>
            </div>}
        </div>
        <div className="homepage__right" onMouseEnter={props.openRight} onMouseLeave={props.closeRight}>
          <div className="homepage__right__header">
            <h2>Projects</h2>
            <Link to="/projects">
                <i className="fas fa-forward" style={{fontSize: "10rem", color: "rgb(83, 11, 11)"}}/>
            </Link>
          </div>
          {props.rightVisible && 
          <div>
            <p style={{fontSize: "2rem", color: "rgb(83, 11, 11)"}}>Click to see some of my projects</p>
          </div>}
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