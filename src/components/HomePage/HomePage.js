import React from 'react'
// import { Link } from 'react-router-dom'


export default function HomePage(props) {

  return (
    <div>
      <div className="homepage" >
        <div className="homepage__title" >
          <h1>Portfolio Gijs Maas</h1>
        </div>
        <div className="homepage__left">
          <div className="homepage__left__header">
            <div><h2>Personal</h2></div>
          </div>
        </div>
        <div className="homepage__middle" >
          <div className="homepage__middle__image">
            <img src="https://i.ibb.co/4YDTRx6/DSC03981.jpg" alt="selfportrait" />
          </div>
          <div className="homepage__middle__list">
            <h2>About me:</h2>
            <h3>Programmer</h3>
            <h3>Teacher</h3>
            <h3>Historian</h3>
            <h3> Father</h3>
          </div>
          <div className="homepage__middle__site">
            <h3>About the site:</h3>
            <p>Welcome to my site!<br/>
            On this site you can take a look at some of my personal info<br /> 
            or at some of the projects I am working on<br/>
            by clicking on the arrows on the right and left side.<br/>
            To navigate the site you can toggle the menu by clicking on the sun<br/>
            in the top right corner of the screen.<br/>
            To go back to the homepage click on the floatin animation in the top left corner.<br/>
            Some of the functionalities will only work if you sign up and log in. <br/>
            Please note that this site is under constant construction.<br/>
            <strong>Enjoy!!</strong> </p>
          </div>
        </div>
        <div className="homepage__right">
          <div className="homepage__right__header">
            <div><h2>Projects</h2></div>
          </div>
        </div>
        <div className="homepage__span" >
          <i className="fab fa-github" />
          <i className="fab fa-linkedin" />
        </div>
      </div>
    </div>
  )
}