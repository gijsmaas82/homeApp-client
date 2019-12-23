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
                  <div className="personalpage__left__active__content__left" onClick={props.showCard}>
                    <h3>{item.contentItems[0].header}</h3>
                    {props.cards.showLeftCard && 
                    <div className="personalpage__left__active__content__left__backface" onClick={props.showCard} >
                      <p>{item.contentItems[0].body}</p>
                      <ul>
                        {item.contentItems[0].list.map(item => {
                          return <li>{item}</li>
                        })}
                      </ul>
                    </div>}
                  </div>
                  <div className="personalpage__left__active__content__middle" onClick={props.showCard}>
                    <h3>{item.contentItems[1].header}</h3>
                    {props.cards.showMiddleCard && 
                    <div className="personalpage__left__active__content__middle__backface" onClick={props.showCard} >
                      <p>{item.contentItems[1].body}</p>
                      <ul>
                        {item.contentItems[1].list.map(item => {
                          return <li>{item}</li>
                        })}
                      </ul>
                    </div>}
                  </div>
                  <div className="personalpage__left__active__content__right" onClick={props.showCard}>
                    <h3>{item.contentItems[2].header}</h3>
                    {props.cards.showRightCard && 
                    <div className="personalpage__left__active__content__right__backface" onClick={props.showCard} >
                      <p>{item.contentItems[2].body}</p>
                      <ul>
                        {item.contentItems[2].list.map(item => {
                          return <li>{item}</li>
                        })}
                      </ul>
                    </div>}
                  </div>
                </div>
              </div>
            } else {
              return
            }
          })}
          
        </div>
        <div className="personalpage__right">
          <div className="personalpage__right__header">
            <Link to="/">
                <i className="fas fa-forward" style={{fontSize: "5rem", color: 'rgb(83, 83, 83)'}}/>
            </Link>
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
            
            {!props.addPersonal ? 
            <div onClick={props.showPersonalInput}>
              <i className="fas fa-plus"></i>
            </div> : 
            <div>
              <form className="addPersonal" onSubmit={props.onSubmit}>
                Name:<br/>
                <input type="text" name="name" value={props.state.name} onChange={props.onChange}/><br/>
                ImageURL:<br/>
                <input type="text" name="imageURL" value={props.state.imageUrl}  onChange={props.onChange}/><br/>
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
        <div className="personalpage__span" >
          
        </div>
      </div>
    </div>
  )
}
