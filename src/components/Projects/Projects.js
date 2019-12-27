import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects(props) {
  return (
    <div>
      <div className="projectspage" >
        <div className="projectspage__title" >
          <h1>Projects</h1>
        </div>
        <div className="projectspage__right">
          {props.activeCV ? 
          <div className="projectspage__right__CV" >
            <img src="https://i.ibb.co/5jGVfSn/Kopie-van-Cover-letter-en-CV-G-Maas.jpg" alt="CV"/> 
          </div> : 
          <div className="projectspage__right__active" >
            <div className="projectspage__right__active__header" >
              <h3>{props.activeItem.name}</h3>
            </div>
            <div className="projectspage__right__active__content">
              <p>{props.activeItem.info}</p>
            </div>
            <div  className="projectspage__right__active__image">
              <div><img src={props.activeItem.image} alt="" /></div>
            </div>
            <div  className="projectspage__right__active__list">
              <ul>
                <li>{props.activeItem.listItemOne}</li>
                <li>{props.activeItem.listItemTwo}</li>
                <li>{props.activeItem.listItemThree}</li>
              </ul>
            </div>
          </div>
          }
        </div>
        <div className="projectspage__left">
          <div className="projectspage__left__header">
            <Link to="/">
                <i className="fas fa-backward" />
            </Link>
            <h3>Menu</h3>
          </div>
          <div className="projectspage__left__menu">
            <div className="projectspage__left__menu__item" onClick={props.showCV}>
              <h3>CV</h3>
            </div>
            <div>{!props.projectInfo ? 'loading' : props.projectInfo.map(item => {
                return <div key={item.name} className="projectspage__left__menu__item" onClick={props.navigateMenu}>
                    <h3 className={item.name}>{item.name}</h3>
                  </div>
              })}</div>
          </div>
            
            {!props.addProject ? 
            <div onClick={props.showProjectInput}>
              <i className="fas fa-plus"></i>
            </div> : 
            <div className="projectspage__left__form">
              <form className="addProject" onSubmit={props.onSubmit}>Name:
                <br/>
                <input type="text" name="name" value={props.state.name} onChange={props.onChange}/><br/>
                ImageURL:<br/>
                <input type="text" name="image" value={props.state.image}  onChange={props.onChange}/><br/>
                info:<br/>
                <textarea type="text" name="info" value={props.state.info}  onChange={props.onChange}/><br/>
                List Item One:<br/>
                <input type="text" name="listItemOne" value={props.state.listItemOne}  onChange={props.onChange}/><br/>
                List Item Two:<br/>
                <input type="text" name="listItemTwo" value={props.state.listItemTwo}  onChange={props.onChange}/><br/>
                List Item Three:<br/>
                <input type="text" name="listItemThree" value={props.state.listItemThree}  onChange={props.onChange}/><br/>
                <button>Submit Project info</button>
              </form>
            </div>}
        </div>
        <div className="projectspage__parallax__bottom" >
        
        </div>
        <div className="projectspage__span" >
            <i className="fab fa-github" />
            <i className="fab fa-linkedin" />
        </div>
      </div>
    </div>
  )
}
