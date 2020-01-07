import React from 'react'
import ReactFileReader from 'react-file-reader'


export default function HomePage(props) {

  return (
    <div>
      <div className="homepage" >
        <div className="homepage__title" >
          <h1>Portfolio Gijs Maas</h1>
        </div>
        <div className="homepage__left">
            <div className="homepage__left__header"><h2>Personal</h2></div>
            <div className="homepage__left__menu">
              <div>
                <div  className="homepage__left__menu__item" onClick={props.showIntro}><h3>Intro</h3></div>
                <div  className="homepage__left__menu__item" onClick={props.showCV}><h3>CV</h3></div>
              </div>
              <div>{!props.personalInfo ? 'loading' : props.personalInfo.map(item => {
                return <div className="homepage__left__menu__item" onClick={props.navigateMenu}>
                    <h3 className={item.name}>{item.name}</h3>
                  </div>
              })}</div>
              {!props.addPersonal ? 
              <div onClick={props.showPersonalInput}>
                <i className="fas fa-plus"></i>
              </div> : 
              <div className="homepage__left__form">
                <form onSubmit={props.onSubmit}>Name:
                  <br/>
                  <input type="text" name="name" value={props.state.name} onChange={props.onChange}/><br/>
                  <ReactFileReader handleFiles={props.handleFiles} base64={true}>
                    <div className='homepage__left__form__addButton'><p>Upload a picture</p></div>
                  </ReactFileReader>
                  {!props.filename ? '' : <div><p>{props.filename}</p></div>}
                  info:<br/>
                  <textarea type="text" name="info" value={props.state.info}  onChange={props.onChange}/><br/>
                  List Item One:<br/>
                  <input type="text" name="listItemOne" value={props.state.listItemOne}  onChange={props.onChange}/><br/>
                  List Item Two:<br/>
                  <input type="text" name="listItemTwo" value={props.state.listItemTwo}  onChange={props.onChange}/><br/>
                  List Item Three:<br/>
                  <input type="text" name="listItemThree" value={props.state.listItemThree}  onChange={props.onChange}/><br/>
                  <div className='homepage__left__form__addButton' onClick={props.onSubmit}><p>Submit personal info</p></div>
                </form>
              </div>}
            </div>
        </div>
        <div className="homepage__middle" >
          {props.intro && <div className="homepage__middle__intro">
            <div className="homepage__middle__intro__image">
              <img src="https://i.ibb.co/4YDTRx6/DSC03981.jpg" alt="selfportrait" />
            </div>
            <div className="homepage__middle__intro__list">
              <h2>About me:</h2>
              <h3>Programmer</h3>
              <h3>Teacher</h3>
              <h3>Historian</h3>
              <h3> Father</h3>
            </div>
            <div className="homepage__middle__intro__site">
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
          </div>}
          {props.activeCV && 
          <div className="homepage__middle__CV" >
            <img src="https://i.ibb.co/5jGVfSn/Kopie-van-Cover-letter-en-CV-G-Maas.jpg" alt="CV"/> 
          </div>}
          {props.activeItem && 
            <div className="homepage__middle__active" >
            <div className="homepage__middle__active__header" >
              <h3>{props.activeItem.name}</h3>
            </div>
            <div  className="homepage__middle__active__image">
              <img src={props.activeItem.image} alt="pic" />
            </div>
            <div  className="homepage__middle__active__list">
              <ul>
                <li>{props.activeItem.listItemOne}</li>
                <li>{props.activeItem.listItemTwo}</li>
                <li>{props.activeItem.listItemThree}</li>
              </ul>
            </div>
            <div className="homepage__middle__active__content">
              <p>{props.activeItem.info}</p>
            </div>
          </div>
          }
        </div>
        <div className="homepage__right">
          <div className="homepage__right__header">
            <h2>Projects</h2>
          </div>
          <div className="homepage__right__info">
            <p>The buttons below are links to a few Github-projects.</p>
          </div>
          <div className="homepage__right__item">
            <a href="https://github.com/gijsmaas82/homeApp-client">
              <h3>HomeApp</h3>
              <p>The website you are now looking at. </p>
            </a>
          </div>
          <div className="homepage__right__item">
            <a href="https://github.com/gijsmaas82/graduation-client">
              <h3>Video games</h3>
              <p>Games I made for my son for the graduation ceremony at Codaisseur.</p>
            </a>
          </div>
          <div className="homepage__right__item">
            <a href="https://github.com/Maartenbuit/TPTW-client">
              <h3>The path to War</h3>
              <p>Online multiplayer game about WWI</p>
            </a>
          </div>
          <div className="homepage__right__item">
            <a href="https://github.com/Official-Codaisseur-Graduate/calendar-api-client">
              <h3>Calendar App</h3>
              <p>Group project where I made a working calendar</p>
            </a>
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