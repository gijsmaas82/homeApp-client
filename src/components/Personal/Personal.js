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
          {props.activeCV ? 
          <div className="personalpage__left__CV" >
            <img src="https://i.ibb.co/5jGVfSn/Kopie-van-Cover-letter-en-CV-G-Maas.jpg" alt="CV"/> 
          </div> : 
          <div className="personalpage__left__active" >
            <div className="personalpage__left__active__header" >
              <h3>{props.activeItem.name}</h3>
            </div>
            <div className="personalpage__left__active__content">
              <p>{props.activeItem.info}</p>
            </div>
            <div  className="personalpage__left__active__image">
              <div><img src={props.activeItem.image} alt="picture" /></div>
            </div>
            <div  className="personalpage__left__active__list">
              <ul>
                <li>{props.activeItem.listItemOne}</li>
                <li>{props.activeItem.listItemTwo}</li>
                <li>{props.activeItem.listItemThree}</li>
              </ul>
            </div>
          </div>
          }
        </div>
        <div className="personalpage__right">
          <div className="personalpage__right__header">
            <Link to="/">
                <i className="fas fa-forward" />
            </Link>
            <h3>Menu</h3>
          </div>
          <div className="personalpage__right__menu">
            <div className="personalpage__right__menu__item" onClick={props.showCV}>
              <h3>CV</h3>
            </div>
            <div>{!props.personalInfo ? 'loading' : props.personalInfo.map(item => {
                return <div className="personalpage__right__menu__item" onClick={props.navigateMenu}>
                    <h3 className={item.name}>{item.name}</h3>
                  </div>
              })}</div>
          </div>
            
            {!props.addPersonal ? 
            <div onClick={props.showPersonalInput}>
              <i className="fas fa-plus"></i>
            </div> : 
            <div className="personalpage__right__form">
              <form className="addPersonal" onSubmit={props.onSubmit}>Name:
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
                <button>Submit Personal info</button>
              </form>
            </div>}
        </div>
        <div className="personalpage__parallax__bottom" >
        
        </div>
        <div className="personalpage__span" >
          <div className="homepage__span" >
            <i className="fab fa-github" />
            <i className="fab fa-linkedin" />
          </div>
        </div>
      </div>
    </div>
  )
}
